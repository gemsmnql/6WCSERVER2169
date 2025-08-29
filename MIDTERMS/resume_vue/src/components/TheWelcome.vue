<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Profile </template>

    
    <b>Objective:</b> Front-End Developer skilled in Vue.js, Node.js, JavaScript, HTML, CSS, and Tailwind CSS, aiming to build responsive, high-performance web applications in a collaborative team environment. <br>
    <b>Name:</b> James Carl Norial Mananquil <br>
    <b>Course:</b> Bachelor of Science in Information Technology <br>
    <b>Specialization:</b> Area of Specialization in Web Development
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Education</template>

    <b>Elementary:</b> School of Saint Brother Benilde <br>
    <b>JHS/SHS:</b> Angeles City Science High School <br>
    <b>College:</b> Holy Angel University

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Skill</template>

    <b>Training:</b> Technical instruction, onboarding, mentoring <br>

    <b>Seminars:</b> Public speaking, workshop facilitation, event planning <br>

    <b>Technologies:</b> Node.js, Vue.js, Tailwind CSS, Git, Vite <br> 

    <b>Programming Languages:</b> HTML, CSS, JavaScript, TypeScript <br>
  </WelcomeItem>
</template>
