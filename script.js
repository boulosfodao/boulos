let storyIndex = 0;
const stories = {
    start: "Você está na entrada de uma floresta misteriosa. O que você deseja fazer?",
    left: [
        "Você encontrou um lago tranquilo. Deseja nadar ou descansar?",
        "Você nadou no lago e encontrou uma pedra brilhante. Deseja pegá-la ou deixá-la?",
        "Você decidiu descansar e recuperou suas energias. O que você fará a seguir?",
    ],
    right: [
        "Você encontrou uma caverna sombria. Deseja entrar ou voltar?",
        "Dentro da caverna, você encontrou um dragão adormecido. Deseja tentar passar ou voltar?",
        "Você voltou e avistou um caminho com flores. Deseja segui-lo ou voltar para a entrada?",
    ],
};

function choosePath(direction) {
    const storyElement = document.getElementById('story');

    if (direction === 'left') {
        storyIndex = (storyIndex + 1) % stories.left.length;
        storyElement.innerText = stories.left[storyIndex];
    } else {
        storyIndex = (storyIndex + 1) % stories.right.length;
        storyElement.innerText = stories.right[storyIndex];
    }
}
