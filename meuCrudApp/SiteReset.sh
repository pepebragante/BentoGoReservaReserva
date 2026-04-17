#!/bin/bash

PORTA=8081
SUBS=("bentogo" "bentogo2" "bentogo3")

while true; do
    for sub in "${SUBS[@]}"; do
        echo "[$(date +'%d/%m/%Y %H:%M:%S')] Tentando subdomínio: $sub"
        
        npx localtunnel --port $PORTA --subdomain $sub
        
        echo ""
        echo "Conexão perdida ou domínio ocupado."
        echo "Rotacionando para o próximo em 2 segundos..."
        sleep 2
    done
done