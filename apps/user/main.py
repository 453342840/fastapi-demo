from apps.user.config import config
from apps.user.router import api_router
from common.server import start_fastapi

app = start_fastapi(config)
app.include_router(api_router)

# uvicorn apps.user.main:app --host 0.0.0.0 --port 8080 --reload
