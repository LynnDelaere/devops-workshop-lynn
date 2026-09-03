#!/usr/bin/env bash
set -euo pipefail

# This creates a single non-functional training marker without storing the complete
# marker text in this script. It is deliberately not a real secret scanner.
marker_prefix='WORKSHOP_DEMO_'
marker_suffix='SECRET_DO_NOT_USE'
marker="${marker_prefix}${marker_suffix}"

matches="$(git grep -n -I --fixed-strings "$marker" || true)"

if [[ -n "$matches" ]]; then
  printf '%s\n' "Blocked workshop policy marker: $marker"
  printf '%s\n' "$matches"
  printf '%s\n' 'Remove the training marker; do not weaken this check.'
  exit 1
fi

printf '%s\n' 'Workshop policy check passed.'
