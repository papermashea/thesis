<template>
  <div>
    <Nav :navLinks="navLinks" :navConfig="navConfig" :btnConfig="btnConfig">
      <img class="img" src="../assets/logo.png" alt="" srcset="" />
    </Nav>
  </div>
</template>

<script>
import Nav from "vue-nav-ui";

export default {
  components: {
    Nav,
  },
  setup() {
     /* FOR YOUR NAVIGATION LINKING NAMES AND PATHS */ 
    const navLinks = ref([
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Media",
        path: "/media",
      },
    ]);

    /* FOR CONFIGURING THE STYLING OF YOUR NAVIGATION */
    const navConfig = ref({
      whitespace: true, /* GIVES PADDING TO YOUR NAV, IF SET TO FALSE, REMOVES PADDING */
      navBg: "black", /* BACKGROUND COLOR OF YOUR NAV  */
      navBorderRadius: "0px", /* BORDER RADIUS OF YOUR NAV */
      linkColor: "white", /* FONT COLOR OF YOUR NAV */
      responsivePosition: "top or bottom", /* FOR CHANGING THE POSITION OF YOUR NAV WHEN RESPONSIVE. BOTTOM or TOP | The only two options */
    });

     /* FOR NAV BUTTON CONFIGURATION */
    const btnConfig = ref({
      btnLink: true, /* FOR INITIALIZING NAV BUTTON USAGE, IF SET TO FALSE, REMOVES THE NAV BUTTON  */
      btnUrl: "https://dhaniel.disha.page", /* LINK URL OF YOUR NAV BUTTON */
      btnText: "Download app", /* NAV BUTTON TEXT */
      btnBg: "#080808", /* BACKGROUND COLOR OF YOUR NAV BUTTON  */
      btnTextColor: "white", /* FONT COLOR OF YOUR NAV BUTTON*/
      btnBorderWidth: "0", /* BORDER WIDTH OF YOUR NAV BUTTON */
      btnBorderColor: "black", /* BORDER COLOR OF YOUR NAV BUTTON */
      btnBorderRadius: "20px", /* BORDER RADIUS OF YOUR NAV BUTTON */
    });

    return { navLinks, btnConfig, navConfig };
  },
};
</script>