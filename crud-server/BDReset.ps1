$subs = @("bentogobd-expo", "bentogobd2-expo", "bentogobd3-expo")
$porta = 3000

while($true) {
    foreach($sub in $subs) {
        Write-Host "`n--- Tentando subdomínio: $sub ---" -ForegroundColor Cyan
        
        $processo = Start-Process cmd -ArgumentList "/c npx localtunnel --port $porta --subdomain $sub" -PassThru -NoNewWindow
        
        Start-Sleep -Seconds 10
        
        Write-Host "Túnel iniciado em: https://$sub.loca.lt" -ForegroundColor Green
        Write-Host "Se os dados aparecem no navegador, o túnel está OK."
        Write-Host "Pressione Ctrl+C para rotacionar manualmente se necessário."

        while ($processo -and !$processo.HasExited) { 
            Start-Sleep -Seconds 5 
        }
        
        Write-Host "Conexão encerrada pelo servidor. Rotacionando..." -ForegroundColor Yellow
    }
}
#Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process                                         habilitar no terminal
#.\BDReset.ps1
