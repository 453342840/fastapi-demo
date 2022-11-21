import sys
import uvicorn
from apps.common.fastapi import start_fastapi
from apps.user.config import config
from apps.user.router import api_router


app = start_fastapi(config)

# 路由
app.include_router(api_router)


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    uvicorn.run(
        app='main:app',
        host='0.0.0.0',
        port=port,
        debug=config.APP_DEBUG,
        reload=config.APP_DEBUG
    )

# env PYTHONPATH=. python apps/meituan/main.py
