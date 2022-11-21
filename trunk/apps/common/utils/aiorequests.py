import json
import aiohttp


async def get(url, params=None):
    if params:
        query = "&".join(["{}={}".format(k, params[k]) for k in sorted(params.keys())])
        url += "?" + query
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            text = await response.text()
            return json.loads(text)


async def post(url, data=None):
    async with aiohttp.ClientSession() as session:
        async with session.post(url, data=json.dumps(data)) as response:
            text = await response.text()
            return json.loads(text)
