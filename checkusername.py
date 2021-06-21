import asyncio, aiohttp

username = "joebiden"
urls = ["https://github.com/", "https://twitter.com/", "https://facebook.com/", "https://instagram.com/", "https://reddit.com/u/", "https://youtube.com/", "https://twitch.tv/"]
urls = [url + username for url in urls]


async def get(url, session):
    async with session.get(url=url) as response:
        try:
            if response.status == 200:
                # set to btn-success
                print('200 OK')
                print(response.host)
            elif response.status == 404:
                # set to btn-danger
                print('404 NOT FOUND')
                print(response.host)
        except Exception:
            # set to btn-secondary
            pass

async def main(urls):
    async with aiohttp.ClientSession() as session:
        await asyncio.gather(*[get(url, session) for url in urls])

asyncio.run(main(urls))