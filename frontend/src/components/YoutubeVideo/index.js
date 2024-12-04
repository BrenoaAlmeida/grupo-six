import React from 'react';

function YouTubeVideo(videoUrl) {    
    // Extrai o ID do vídeo da URL
    const videoId = extractVideoId(videoUrl);

    // // Se o ID for válido, monta o link de embed
    const videoEmbedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            {videoEmbedUrl && (
                <iframe
                    width="560"
                    height="315"
                    src={videoEmbedUrl}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
            {!videoEmbedUrl && <p>URL inválida.</p>}
        </div>
    );
}

// Função para extrair o ID do vídeo    
function extractVideoId(videoUrl) {
    const url = videoUrl.videoId;
    const regex = /(?:youtu.be\/|youtube.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=))([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function App({videoUrl}) {
    return (
        <div>
            <YouTubeVideo videoId={videoUrl} />
        </div>
    );
}

export default App;