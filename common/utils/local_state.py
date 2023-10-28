import pickle
from collections import OrderedDict


class LRUState:
    """本地LRU缓存"""
    def __init__(self, capacity: int, file_path: str):
        self.cache = OrderedDict()  
        self.capacity = capacity
        self.file_path = file_path

    def get(self, key: int) -> any:
        if key not in self.cache:
            self.load_from_disk()
            if key not in self.cache:
                return None
        # 将访问过的元素移动到字典末尾  
        self.cache.move_to_end(key)  
        return self.cache[key]

    def set(self, key: int, value: int) -> None:  
        if key in self.cache:  
            # 如果 key 已经存在于缓存中，先删除再重新插入到末尾  
            self.cache.pop(key)

        elif len(self.cache) >= self.capacity:  
            # 如果缓存已满，删除最近最少使用的元素  
            self.cache.popitem(last=False)

        self.cache[key] = value
        self.save_to_disk()

    def save_to_disk(self) -> None:
        with open(self.file_path, 'wb') as f:
            pickle.dump(self.cache, f)

    def load_from_disk(self) -> None:
        with open(self.file_path, 'rb') as f:
            self.cache = pickle.load(f)


lru_state = LRUState(capacity=100, file_path='./compose/local_state.pkl')