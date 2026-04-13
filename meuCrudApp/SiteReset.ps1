$subs = @("Bentogo", "Bentogo2", "Bentogo3")
$porta = 8081

while($true) {
    foreach($sub in $subs) {
        Write-Host "`n--- Tentando subdomínio: $sub ---" -ForegroundColor Cyan
        
        # Inicia o processo do túnel
        $processo = Start-Process cmd -ArgumentList "/c npx localtunnel --port $porta --subdomain $sub" -PassThru -NoNewWindow
        
        # Aguarda 10 segundos para estabilização inicial
        Start-Sleep -Seconds 10
        
        Write-Host "Túnel solicitado para: https://$sub.loca.lt" -ForegroundColor Green
        Write-Host "Se o navegador abrir a página, o túnel está funcionando."
        Write-Host "Pressione Ctrl+C para forçar a troca de subdomínio."

        # O script agora só rotaciona se o processo do npx fechar de fato
        while ($processo -and !$processo.HasExited) { 
            Start-Sleep -Seconds 5 
        }
        
        Write-Host "Conexão encerrada. Tentando próximo subdomínio..." -ForegroundColor Yellow
    }
}
#Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process habilitar no terminal
#.\SiteReset.ps1