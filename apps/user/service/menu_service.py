from common.models.user import Menu


async def get_menu_map(user_id):
    """将所有菜单转换成哈希"""
    # TODO 检测用户权限
    # menus = await Menu.filter(role__user__id=user_id).order_by('parent_id', 'sort')
    menus = await Menu.filter().order_by('parent_id', 'sort')
    root_list = []  # 记录根id
    map_menus = dict()
    for menu in menus:
        if menu.parent_id == 0:
            root_list.append(menu.id)

        data = {
            'parent_id': menu.parent_id,
            'name': menu.name,
            'path': '/' + menu.name.replace('_', '/'),
            'component': 'basic',  # 默认是basic
            'meta': {
                'title': menu.title,
                'icon': menu.icon,
                'keepAlive': True,     # 是否缓存
                'requiresAuth': True,  # 默认所有页面要登陆
            }
        }

        map_menus[menu.id] = data
    return root_list, map_menus


def get_home_route(menu):
    """默认获取第一个叶子节点为首页"""
    if menu.get('children', None):
        return get_home_route(menu['children'][0])
    return menu['name']


async def get_routes(user_id):
    """结合哈希一维转换为树结构，时间复杂度O(n)，后续可把数据传给前端去生成"""
    root_list, map_menus = await get_menu_map(user_id)
    for menu in map_menus.values():
        if menu['name'] == 'home':
            menu['component'] = 'self'
            menu['meta']['singleLayout'] = 'basic'  # 单页面需要添加此配置

        parent_id = menu.pop('parent_id')
        if parent_id not in map_menus:
            continue

        parent_menu = map_menus[parent_id]
        if parent_menu['component'] in ['basic', 'multi']:  # 两级菜单
            menu['component'] = 'self'
        elif parent_menu['component'] == 'self':
            parent_menu['component'] = 'multi'
            menu['component'] = 'self'

        children = map_menus[parent_id].get('children', [])
        children.append(menu)
        map_menus[parent_id]['children'] = children

    routes = [map_menus[root] for root in root_list]
    return routes, get_home_route(routes[0])

