<template>
  <footer class="stripe">
    <section>
      <div class="logo">
        <LogoHoriz />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/code-of-conduct" title="Code of Conduct">Code of Conduct</a>
          </li>
          <li>
            <a class="uses" href="/uses" title="My gear & setup">What I'm Using <VideoCamera /></a>
          </li>
          <li>
            <a
              class="patreon"
              href="https://bbb.dev/patreon"
              title="Support BBB via Patreon">Become a Patron <Patreon/></a>
          </li>
          <li>
            <a
              class="github"
              href="https://github.com/builders-club/baldbeardedbuilder.com"
              title="Crafted with love on GitHub">Crafted with <Heart/></a>
          </li>
          <li class="socials">
            <ul>
              <li>
                <a
                  href="https://twitter.com/baldbeardbuild"
                  rel="noreferrer"
                  target="_blank"
                  class="twitter"
                  title="Follow the musings on Twitter"
                >
                  <Twitter/></a>
              </li>
              <li>
                <a
                  href="https://twitch.tv/baldbeardedbuilder"
                  rel="noreferrer"
                  target="_blank"
                  class="twitch"
                  title="Check out the live streams on Twitch"
                >
                  <Twitch/></a>
              </li>
              <li>
                <a
                  href="https://youtube.com/baldbeardedbuilder"
                  rel="noreferrer"
                  target="_blank"
                  class="youtube"
                  title="Subscribe, like & comment on YouTube videos"
                >
                  <YouTube/></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/baldbeardedbuilder/"
                  rel="noreferrer"
                  target="_blank"
                  class="instagram"
                  title="Follow the fun on Instagram"
                >
                 <Instagram/>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/michaelwjolley/"
                  rel="noreferrer"
                  target="_blank"
                  class="linkedin"
                  title="Get professional on LinkedIn"
                >
                 <LinkedIn/></a>
              </li>
              <li>
                <a
                  href="https://discord.gg/XSG7HJm"
                  rel="noreferrer"
                  target="_blank"
                  class="discord"
                  title="Join the Discord community"
                >
                  <Discord/></a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  </footer>
</template>
<script lang="ts">
import LogoHoriz from 'component:vue:LogoHoriz'
import Discord from 'icon:brand:Discord';
import LinkedIn from 'icon:brand:LinkedIn';
import Instagram from 'icon:brand:Instagram';
import Twitter from 'icon:brand:Twitter';
import Twitch from 'icon:brand:Twitch';
import YouTube from 'icon:brand:YouTube';
import Heart from 'icon:Heart';
import Patreon from 'icon:brand:Patreon';
import VideoCamera from 'icon:VideoCamera';
export default {
  components: {
    LogoHoriz,
    Discord,
    LinkedIn,
    Instagram,
    Twitch,
    Twitter,
    YouTube,
    Patreon,
    Heart,
    VideoCamera
  }  
}
</script>
