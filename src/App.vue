<template>
  <div class="layout">
    <div class="nav-wrapper">
      <NavBar />
    </div>
    <div class="content-wrapper">
      <div class="sidebar-wrapper">
        <SideBarLeft />
      </div>

      <div class="main-content">
        <iframe
          src="https://tanghoang.github.io/whisker-edit/?lng=de"
          allowtransparency="true"
          width="1000"
          height="800"
          frameborder="0"
          scrolling=""
          allowfullscreen
        ></iframe>
        <ChapterBlock 
          title="Kontrollstrukturen" 
          description="Am Ende dieses Arbeitsheftes wirst du dein eigenes Flappy Bird Spiel programmieren. Damit du das schaffst, lernst du jetzt ein Kontrollstrukturen kennen, die dir helfen werden effektiv zu programmieren." 
          :content=chapter_1
        />
        <ChapterBlock 
          title="Projekt: Flappy Bird"
          description="Test Test Test"
          :content="chapter_2"
        />
      </div>
    </div>
    
  </div>
</template>

<script setup>
  import SideBarLeft from './components/SideBarLeft.vue'
  import NavBar from './components/NavBar.vue'
  import ChapterBlock from "./components/ChapterBlock.vue"
  
  const chapter_1 = [
    {
      title: "Aufgabe 1",
      description: "",
      subTasks: [
        'Starte das folgende Programm und führe es aus.',
        'Beschreibe, wo Fallunterscheidungen auftreten',
      ],
      scratchUrl: "https://scratch.mit.edu/projects/1200064022/embed",
      image: "raumschiff_code.png",
      hints: [
        {
          title: "Hinweis-Titel",
          hint: "Hinweis-Content"
        }
      ]
    },
    {
      title: "Aufgabe 2",
      description: "Verändere das Verhalten.",
      subTasks: [
        'Ändere die Startposition der Figur.',
        'Teste, ob sich das Verhalten verändert.',
      ],
      scratchUrl: "https://scratch.mit.edu/projects/1200064111/embed"
    },
  ]    
  const chapter_2 = [
    {
      title: "Aufgabe 5",
      description: "hallo hallo",
      subTasks: [
        'Starte das folgende Programm und führe es aus.',
        'Beschreibe, wo Fallunterscheidungen auftreten',
      ],
      scratchUrl: "https://scratch.mit.edu/projects/1200064022/embed" 
    }
  ]  
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;  
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.nav-wrapper {
  height: 60px;
  width: 100%;
  flex-shrink: 0;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100%;
  overflow: hidden;
}

.sidebar-wrapper {
width: 20%;
  padding: 1rem;
  overflow-y: auto;
}

.main-content {
  padding: 2rem;
  overflow-y: auto;
}


</style>
