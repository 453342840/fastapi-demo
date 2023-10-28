import json
import aiohttp


def parse_url(url, params=None, suffix=None):
    if params:
        query = "&".join(["{}={}".format(k, params[k]) for k in sorted(params.keys())])
        if "?" in url:
            url += "&" + query
        else:
            url += "?" + query
    if suffix:
        url += suffix
    return url


async def get(url, params=None, headers=None, suffix=None):
    url = parse_url(url, params, suffix)
    async with aiohttp.ClientSession(trust_env=True) as session:
        async with session.get(url, headers=headers) as response:
            text = await response.text()
            return json.loads(text)


async def post(url, data=None, headers=None):
    async with aiohttp.ClientSession(trust_env=True) as session:
        if isinstance(data, dict):
            data = json.dumps(data)
        async with session.post(url, data=data, headers=headers) as response:
            text = await response.text()
            return json.loads(text)
