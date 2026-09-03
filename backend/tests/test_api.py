from app.main import health, welcome


def test_health() -> None:
    assert health() == {"status": "ok"}


def test_welcome_uses_a_default_team_name(monkeypatch) -> None:
    monkeypatch.delenv("WORKSHOP_TEAM_NAME", raising=False)

    assert welcome()["team"] == "Workshop team"
