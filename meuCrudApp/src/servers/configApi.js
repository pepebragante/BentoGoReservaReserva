const URLs_DISPONIVEIS = [
    "https://bentogobd-expo.loca.lt",
    "https://bentogobd2-expo.loca.lt",
    "https://bentogobd3-expo.loca.lt"
  ];

  let urlAtivaCache = null;
  
  export const getApiUrl = async () => {

    if (urlAtivaCache) return urlAtivaCache;
  

    for (let url of URLs_DISPONIVEIS) {
      try {
        console.log(`[API] Testando: ${url}`);
        

        const response = await fetch(url, {
          method: 'GET',
          headers: {

            'Bypass-Tunnel-Reminder': 'true' 
          }
        });
  
        if (response.ok) {
          console.log(`[API] Túnel online encontrado: ${url}`);
          urlAtivaCache = url; 
          return url;
        }
      } catch (error) {
        console.log(`[API] Túnel ${url} fora do ar. Tentando o próximo...`);
      }
    }
  
    console.error("[API] Erro: Nenhum túnel do Banco de Dados está online!");
    throw new Error("Nenhum servidor disponível");
  };
  

  export const resetApiUrl = () => {
      urlAtivaCache = null;
  };