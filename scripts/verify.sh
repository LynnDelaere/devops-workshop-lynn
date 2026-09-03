#!/usr/bin/env bash
set -euo pipefail

echo "Checking the proxied API health endpoint..."
curl --fail --silent --show-error http://localhost:8080/api/health

echo
echo "Checking the proxied welcome endpoint..."
curl --fail --silent --show-error http://localhost:8080/api/welcome

echo
echo "Workshop Welcome Board is responding through the frontend."

