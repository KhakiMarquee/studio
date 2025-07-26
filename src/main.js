document.addEventListener('DOMContentLoaded', () => {
const triggerText = document.getElementById('hoverText');
  const overlay = document.getElementById('overlay');
  let overlayActive = false; // track overlay state

  if (triggerText && overlay) {
    // Show overlay on hover
    triggerText.addEventListener('mouseenter', () => {
      overlay.classList.add('show');
      overlayActive = true;
    });

    // Hide overlay on mouse leave
    triggerText.addEventListener('mouseleave', () => {
      overlay.classList.remove('show');
      overlayActive = false;
    });

    // Toggle overlay on click
    triggerText.addEventListener('click', (e) => {
      e.stopPropagation(); // Stop click event from affecting other handlers
      overlayActive = !overlayActive;
      overlay.classList.toggle('show', overlayActive);
    });

    // Hide overlay when clicking directly on it
    overlay.addEventListener('click', (e) => {
      e.stopPropagation();
      overlay.classList.remove('show');
      overlayActive = false;
    });
  }

  // --- Tap Button Functionality ---
  const tapButton = document.querySelector('.tap-button');
  const transitionSpace = document.querySelector('.transition-space');
  const mainText = document.querySelector('.main-text');
  const secondaryText = document.querySelector('.secondary-text');
  const container = document.querySelector('.site-body .container');

  if (tapButton && transitionSpace && mainText && container) {
    tapButton.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent triggering overlay logic
      const isActive = transitionSpace.classList.toggle('active');
      if (isActive) {
        mainText.classList.add('hide');
        container.classList.add('collapse');
      } else {
        mainText.classList.remove('hide');
        container.classList.remove('collapse');
      }
    });
  }



// Strudel Init

let strudelInitialized = false; // Flag to check if Strudel is initialized

    document.getElementById('play').addEventListener('click', () => {
    if (!strudelInitialized) {
        try {
        initStrudel();
        strudelInitialized = true;
        } catch (e) {
        console.error('Strudel init error:', e);
        }
    }
    try {
        note('<c a f e>(3,8)').jux(rev).play();

    } catch (e) {
        console.error('Play error:', e);
    }
    });



});




/*/ 
    import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.162.0/build/three.module.js';
    import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.162.0/examples/jsm/controls/OrbitControls.js';
    import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.162.0/examples/jsm/loaders/GLTFLoader.js';

Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 3); // Move camera back a bit

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('three-container').appendChild(renderer.domElement);

    // Lights
    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    light.position.set(0, 1, 0);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Load GLTF Model
    const loader = new GLTFLoader();
    loader.load(
      'path/to/your/model.glb', // <-- Replace with your model path
      function (gltf) {
        const model = gltf.scene;
        scene.add(model);

        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
      },
      undefined,
      function (error) {
        console.error('An error occurred while loading the model:', error);
      }
    );

    // Resize Handling
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate(); */