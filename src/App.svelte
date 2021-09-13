<script>
  import GoogleFont from "@svelte-web-fonts/google";
  import { Styles, Icon } from "sveltestrap";

  const font = {
    family: "Bona Nova",
    serif: true,
    variants: ["400", "700"],
  };
</script>

<Styles />
<svelte:head>
  <GoogleFont {font} />
</svelte:head>

<div class="main">
  <!-- <div class="hero-row-nav">
      <h1 class="hero-page-title">Cüneyt Kaya</h1>
    </div> -->
  <div class="hero-row-content">
    <div class="hero-text">
      <div class="text-itself">
        <h1>Cüneyt Kaya</h1>
        <h2>Web Developer</h2>
        <p>
          Hello! My name is Cüneyt, I am a student in the EU-Russia Studies
          master program at Tartu University. As a front-end web developer and
          WordPress developer for more than 2 years, I have been trying to
          produce solutions for people's needs. If you want to follow my
          adventure in web technologies and contact me, you can use the
          communication channels below.
        </p>
      </div>
      <div class="hero-row-social">
        <a
          target="_blank"
          href="https://twitter.com/cueneytkaya"
          class="btn btn-outline-info mx-2"
        >
          <i class="bi bi-twitter" />
        </a>
        <a
          target="_blank"
          href="https://github.com/kayacuneyd"
          class="btn btn-outline-info mx-2"
        >
          <i class="bi bi-github" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/kayacuneyd2019/"
          class="btn btn-outline-info mx-2"
        >
          <i class="bi bi-linkedin" />
        </a>
      </div>
    </div>
    <div class="hero-photo">
      <img
        class="dev-photo"
        src="https://kayacuneyt.com/wp-content/uploads/2021/03/cropped-FOTOBEN.jpg"
        alt="developer kaya"
      />
    </div>
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100vh;
    background-color: rgb(228, 228, 228);
    font-family: "Bona Nova";
    font-weight: 400;
    font-size: 1.25em;
  }

  .main h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  .hero-row-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    height: 90vh;
  }

  .hero-row-social {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 2rem;
  }

  .text-itself {
    margin-bottom: 3rem;
  }

  .hero-photo {
    padding: 2.5rem;
  }

  .dev-photo {
    max-width: 25vw;
    height: auto;
    border-radius: 50%;
    box-shadow: 1px 1px 10px 5px;
  }

  @media only screen and (max-width: 850px) {
    .hero-row-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;

      height: 90vh;
    }

    .hero-text {
      text-align: center;
    }

    .dev-photo {
      max-width: 40vw;
      height: auto;
      border-radius: 50%;
      box-shadow: 1px 1px 10px 5px;
    }
  }
</style>
