<template>
  <div id="app">
    <el-row type="flex" justify="center">
      <el-col :span="16">
        <el-alert :type="isOnline ? 'success' : 'error'" effect="dark" :closable="false">
          <template #title>
            <h1>{{ isOnline ? 'Online' : 'Offline' }}</h1>
          </template>
        </el-alert>
        <br>
        <el-button type="primary" @click="installApp">
          <h1>Install app</h1>
        </el-button>
        <br>
        <br>
        <el-button type="primary" @click="requestPermission">
          <h1>Request permission</h1>
        </el-button>
        <h1 v-if="firebaseToken">Token: {{ firebaseToken }}</h1>
        <br>
        <br>
        <img src="./assets/mathias-reding-OBjQZ60jIiQ-unsplash.jpg" width="50%" alt="">
        <h3>
          The web is an incredible platform. Its mix of ubiquity across devices and operating systems, its user-centered security model, and the fact that neither its specification nor its implementation are controlled by a single company makes the web a unique platform to develop software on. Combined with its inherent linkability, it's possible to search it and share what you've found with anyone, anywhere. Whenever you go to a website, it's up-to-date, and your experience with that site can be as ephemeral or as permanent as you'd like. Web applications can reach anyone, anywhere, on any device with a single codebase.
          Platform-specific applications are known for being incredibly rich and reliable. They're ever-present, on home screens, docks, and taskbars. They work regardless of network connection. They launch in their own standalone experience. They can read and write files from the local file system, access hardware connected via USB, serial port, or bluetooth, and even interact with data stored on your device, such as contacts and calendar events. In these applications, you can do things such as take pictures, see playing songs listed on the home screen, or control song playback while in another app. Platform-specific applications feel like part of the device they run on.
        </h3>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import firebase from './firebase'
import { getMessaging, getToken } from "firebase/messaging";

const messaging = getMessaging(firebase)

export default {
  name: 'App',
  data() {
    return {
      isOnline: true,
      deferredPrompt: null,
      firebaseToken: null,
    };
  },
  methods: {
    async installApp() {
      try {
        if(!this.deferredPrompt) return;

        this.deferredPrompt.prompt();
        const { outcome } = await this.deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        this.deferredPrompt = null;
      } catch (error) {
        console.log(error);
      }
    },
    async requestPermission() {
      try {
        this.firebaseToken = await getToken(
          messaging,
          { vapidKey: 'BHpYdTv2Zwfh47humXCwJGTwCEJSc9z6fu_oyQgFIj6BqF6BaH__K8YAIQsrrVV1ay1cM_Dxh1_7hMZzfmxaKZY' }
        )
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      console.log(`'beforeinstallprompt' event was fired.`);
    });
    window.onload = () => {
      this.isOnline = navigator.onLine;
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
