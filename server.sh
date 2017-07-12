#!/bin/sh

kill -9 $(lsof -ti :3000)
node scripts/web-server.js
