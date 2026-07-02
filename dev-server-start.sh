#!/usr/bin/env bash
export PATH="$HOME/.local/node/bin:$PATH"
cd /home/eliran17/projects/HiBiz
pkill -9 -f "vite --host" 2>/dev/null
sleep 1
rm -f /tmp/vite-dev.log
setsid nohup npm run dev -- --host 0.0.0.0 --port 5180 --strictPort > /tmp/vite-dev.log 2>&1 < /dev/null &
disown
sleep 3
cat /tmp/vite-dev.log
echo "---procs---"
pgrep -af "vite --host"
