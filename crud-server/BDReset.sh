#!/bin/bash

PORTA=3000
SUBS=("bentogobd" "bentogobd2" "bentogobd3")

while true; do
    for sub in "${SUBS[@]}"; do
        echo "[$(date +'%d/%m/%Y %H:%M:%S')] Tentando subdomínio do BD: $sub"
        
        npx localtunnel --port $PORTA --subdomain $sub
        
        echo ""
        echo "Conexão do BD perdida ou domínio ocupado."
        echo "Rotacionando para o próximo em 2 segundos..."
        sleep 2
    done
done