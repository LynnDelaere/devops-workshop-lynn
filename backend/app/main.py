import os

from fastapi import FastAPI

app = FastAPI(title="Workshop Welcome Board API")


def team_name() -> str:
    return os.getenv("WORKSHOP_TEAM_NAME", "Workshop team")


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"


@app.get("/api/welcome")
def welcome() -> dict[str, str]:
    team = team_name()
    return {
        "message": f"Welcome, {team}!",
        "team": team,
    }

