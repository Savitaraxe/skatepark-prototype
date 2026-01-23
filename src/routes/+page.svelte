<script lang="ts">
  // Define the type for Instagram posts
  type InstagramPost = {
    id: number;
    image: string;
    title: string;
    preview: string;
    caption: string;
    date: string;
  };
  
  let selectedPost: InstagramPost | null = null;
  
  // Sample Instagram posts data
  const instagramPosts: InstagramPost[] = [
    {
      id: 1,
      image: '/instagram-1.jpg',
      title: 'VINEYARD SKATEPARK FEEDBACK',
      preview: 'Vineyard Needing Skate Community Feedback on Skatepark Designs',
      caption: '🚧 VINEYARD SKATEPARK FEEDBACK— WE NEED YOUR THOUGHTS & OPINIONS 🚧\n\nThe first conceptual renderings for the proposed Vineyard Skatepark are here 👀 Vineyard City @vineyardcity is working with Hunger Skateparks @hunger_skateparks on these early designs, and this is the moment for the skate community to speak up.\n\n👉 Drop your feedback directly in the comments below',
      date: 'January 15, 2026'
    },
    {
      id: 2,
      image: '/instagram-2.jpg',
      title: 'RIVERTON SKATEPARK',
      preview: 'Local Riverton Skatepark Representation Needed',
      caption: '🚨Local Riverton Skatepark Representation Needed 🚨\n\nRepost from Riverton City:\n\nDECISION PROCESS REGARDING THE SKATEPARK\n\nOn January 20th, a committee will be formed regarding the skate park...',
      date: 'January 20, 2026'
    },
    {
      id: 3,
      image: '/instagram-3.jpg',
      title: 'MAGNA SKATEPARK',
      preview: "Magna's Skatepark is Officially Open!",
      caption: "🚨MAGNA'S SKATEPARK IS OFFICIALLY OPEN!🚨\nBig news for the west side! Magna City just wrapped up the renovation of the Copper Park Skatepark...",
      date: 'December 2025'
    },
    {
      id: 4,
      image: '/instagram-4.jpg',
      title: 'VERNAL ALL WHEELS PARK',
      preview: 'Grand Opening Nov. 1st - Skatepark Construction Update',
      caption: '📍Vernal - All Wheels Park 🦕\n\n📅 Grand Opening: November 1, 2025\n\nThe 13,000 sqft Vernal All-Wheel Park 🦖 is nearing completion...',
      date: 'November 2025'
    },
    {
      id: 5,
      image: '/instagram-5.jpg',
      title: 'LITTLE VALLEY SPOTLIGHT',
      preview: 'Little Valley - Skatepark Spotlight',
      caption: '📍Little Valley - Skatepark Spotlight\n\nThis past weekend I had to opportunity to check out the new Little Valley skatepark in St. George, UT...',
      date: 'October 2025'
    },
    {
      id: 6,
      image: '/instagram-6.jpg',
      title: 'MAGNA CONSTRUCTION UPDATE',
      preview: 'Construction Begins Friday!!! October 10th',
      caption: '🚧 Magna Skatepark Construction Update 🛹\n\nConstruction on the new Magna skatepark at Copper Park has been delayed slightly...',
      date: 'October 2025'
    }
  ];
  
  function openPost(post: InstagramPost) {
    selectedPost = post;
  }
  
  function closeModal() {
    selectedPost = null;
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Raleway:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>


<div class="min-h-screen bg-white">
  <!-- NAV -->
<nav style="
  background:#1a1a1a;
  position:fixed;
  width:100%;
  top:0;
  z-index:50;
">
  <div style="
    height:50px;
    display:flex;
    align-items:center;
    padding:0 20px;
  ">
    <!-- Logo (far left, vertically centered) -->
    <a href="https://www.utahskateparkadvocacygroup.com/"
       target="_blank"
       rel="noopener"
       style="display:flex;align-items:center;margin-right:25px;">
      <img
        src="/icon-mini.png"
        alt="Utah Skatepark Advocacy Group"
        style="width:32px;height:32px;display:block;"
      />
    </a>

    <!-- Navigation -->
    <div style="display:flex;align-items:center;gap:20px;">
      <a href="/" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">Home</a>
      <a href="/skateparks" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">Skateparks</a>
      <a href="/resources" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">Resources</a>
      <a href="/design-builders" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">Design & Builders List</a>
      <a href="/community" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">Community</a>
      <a href="/news" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">News & Media</a>
      <a href="/about" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">About</a>
    </div>

    <!-- Social icons pushed to far right -->
    <div style="
      margin-left:auto;
      display:flex;
      align-items:center;
      gap:16px;
    ">
    </div>
  </div>
</nav>

 <!-- Hero Section -->
<section class="relative" style="margin-top: 50px; background-image: url('/hero-bg.jpg'); padding: 50px 0;">
  <div style="max-width: 1400px; margin: 0 auto; padding: 0 80px;">
    <div class="grid md:grid-cols-2 gap-20 items-center">
      <!-- Left side - Logo -->
      <div class="flex justify-center md:justify-start">
        <img src="/logo-white.png" alt="Utah Skatepark Advocacy Group" style="width: 300px; height: 188px;" />
      </div>
      
      <!-- Right side - Text -->
      <div class="text-left">
        <p style="font-size: 22px; line-height: 1.7; color: #1a1a1a; font-weight: 300; font-family: 'raleway', sans-serif; max-width: 350px;">
          Expanding skatepark access with an end goal that every rider in Utah has a quality and safe place to ride.
        </p>
      </div>
    </div>
  </div>
</section>

 <!-- Mission Section -->
<section style="padding: 20px 20px; background: white;">
  <div style="max-width: 1400px; margin: 0 auto;">
    <h2 style="font-size: 72px; font-weight: 500; color: #FFC03A; margin-bottom: 0px; margin-left: 225px; text-align: left; text-transform: uppercase; font-family: 'Oswald', sans-serif; letter-spacing: 0px;">OUR MISSION:</h2>
    <div class="flex items-start justify-between gap-4">
      <p style="font-size: 20px; line-height: 1.7; color: #000000; max-width: 800px; margin: 0; margin-left: 225px; font-family: 'raleway', sans-serif; font-weight: 400;">
        The Utah Skatepark Advocacy Group exists to support Utah communities in expanding access to quality and safe skateparks.
      </p>
      <a href="#contact" style="display: inline-block; border: 1px solid #1a1a1a; color: #1a1a1a; padding: 10px 30px; font-size: 14px; font-weight: 400; text-decoration: none; white-space: nowrap; font-family: 'Raleway', sans-serif; margin-right: 300px;">
        Contact Us
      </a>
    </div>
  </div>
</section>

 <!-- Testimonial Section -->
<section style="padding: 40px 40px; background: rgb(255, 192, 58)">
  <div style="max-width: 800px; margin: 0 auto; text-align: center;">
    <h3 style="font-size: 28px; font-weight: 500; color: #000000; margin-bottom: 30px; font-family: 'Oswald', sans-serif;">
      How have skateparks positively impacted your life?
    </h3>
    <blockquote style="text-align: left; max-width: 600px; margin: 0 auto;">
      <p style="font-size: 18px; line-height: 1.5; color: #000000; margin-bottom: 0; font-weight: 500; font-family: 'Oswald', sans-serif;">
        "I am who I am because of skateboarding and the skateparks that I grew up attending. Learning from my mistakes and getting back up after I fall came from skateboarding, not from church, not from my family, not from school, not from the government, it all came from skateboarding. I am now a helicopter pilot for the United States Marine Corps, it took a lot of determination to get here and I attribute that determination to skateboarding."
      </p>
      <footer style="text-align: right; color: #000000; font-size: 20px; font-weight: 400; margin-top: 20px; font-family: 'Oswald', sans-serif;">
        - Tyson, Sandy, UT
      </footer>
    </blockquote>
    
    <!-- Pagination dots -->
    <div class="flex justify-center space-x-2 mt-10">
      <button style="width: 8px; height: 8px; border-radius: 50%; background: white; border: none; padding: 0; cursor: pointer;"></button>
      <button style="width: 8px; height: 8px; border-radius: 50%; background: rgba(0,0,0,0.3); border: none; padding: 0; cursor: pointer;"></button>
      <button style="width: 8px; height: 8px; border-radius: 50%; background: rgba(0,0,0,0.3); border: none; padding: 0; cursor: pointer;"></button>
      <button style="width: 8px; height: 8px; border-radius: 50%; background: rgba(0,0,0,0.3); border: none; padding: 0; cursor: pointer;"></button>
      <button style="width: 8px; height: 8px; border-radius: 50%; background: rgba(0,0,0,0.3); border: none; padding: 0; cursor: pointer;"></button>
    </div>
  </div>
</section>

 <!-- Instagram Feed Section -->
<section style="padding: 100px 80px; background: white;">
  <div style="max-width: 1600px; margin: 0 auto;">
    <h3 style="font-size: 36px; font-weight: 400; color: #1a1a1a; margin-bottom: 60px; text-align: center; font-family: 'Oswald', sans-serif;">
      Follow us on Instagram 
      <a href="https://www.instagram.com/goskateutah" target="_blank" style="font-size: 36px; color: #3897f0; text-decoration: none; font-family: 'Oswald', sans-serif; margin-left: 8px;">
        @goskateutah
      </a>
    </h3>
    
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; width: 100%;">
  {#each instagramPosts as post}
    <button
      on:click={() => openPost(post)}
      class="instagram-post"
      style="border: none; padding: 0; background: #f0f0f0; cursor: pointer; position: relative; overflow: hidden; display: block; height: 500px;"
    >
      <img 
        src={post.image} 
        alt={post.title} 
        style="width: 100%; height: 100%; object-fit: cover; display: block;"
      />
      <!-- Hover Overlay - Shows actual post content -->
      <div class="overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0); transition: background 0.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 30px; pointer-events: none; overflow: hidden;">
        <div class="overlay-content" style="color: white; text-align: center; opacity: 0; transition: opacity 0.3s ease; max-height: 100%; overflow: hidden;">
          <h4 style="font-weight: bold; font-size: 16px; font-family: 'Oswald', sans-serif; margin: 0 0 12px 0; text-transform: uppercase;">{post.title}</h4>
          <p style="font-size: 14px; font-family: 'Oswald', sans-serif; margin: 0; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 8; -webkit-box-orient: vertical; overflow: hidden;">{post.preview}</p>
        </div>
      </div>
    </button>
  {/each}
</div>
    
    <div class="text-center" style="margin-top: 40px;">
      <button style="color: #1a1a1a; font-weight: 400; border: 1px solid #d4d4d4; padding: 12px 28px; background: white; cursor: pointer; font-size: 14px; font-family: 'Oswald', sans-serif;">
        Load More
      </button>
    </div>
  </div>
</section>

  <!-- Contact Form Section -->
<section id="contact" style="padding: 20px 20px; background: #191919;">
  <div style="max-width: 1000px; margin: 0 auto;">
    <h3 style="font-size: 36px; font-weight: 400; color: #FFC03A; margin-bottom: 10px; text-align: left; font-family: 'Oswald', sans-serif; text-transform: uppercase;">
      CONTACT US
    </h3>
    
    <!-- Social icons and trick tip inline -->
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 40px;">
      <a href="https://www.facebook.com/goskateutah" target="_blank" style="color: white;">
        <svg style="width: 18px; height: 18px; fill: white;" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>
      <a href="https://www.instagram.com/goskateutah/" target="_blank" style="color: white;">
        <svg style="width: 18px; height: 18px; fill: white;" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a>
      <p style="color: #F7F7F7; font-size: 13px; font-family: 'Oswald', sans-serif; margin: 0;">
        Trick Tip: Get in contact with us faster through a direct message on Instagram. @goskateutah
      </p>
    </div>
    
    <form style="display: flex; flex-direction: column; gap: 20px;">
      <div>
        <label for="name" style="display: block; font-size: 14px; font-weight: 400; color: #F7F7F7; margin-bottom: 6px; font-family: 'raleway', sans-serif;">Name *</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" style="width: 100%; padding: 10px 12px; border: 1px solid white; font-size: 14px; background: #191919; color: white; font-family: 'raleway', sans-serif;" />
      </div>
      
      <div>
        <label for="email" style="display: block; font-size: 14px; font-weight: 400; color: #F7F7F7; margin-bottom: 6px; font-family: 'raleway', sans-serif;">Email *</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" style="width: 100%; padding: 10px 12px; border: 1px solid white; font-size: 14px; background: #191919; color: white; font-family: 'raleway', sans-serif;" />
      </div>
      
      <div>
        <label for="subject" style="display: block; font-size: 14px; font-weight: 400; color: #F7F7F7; margin-bottom: 6px; font-family: 'raleway', sans-serif;">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Type the subject" style="width: 100%; padding: 10px 12px; border: 1px solid white; font-size: 14px; background: #191919; color: white; font-family: 'raleway', sans-serif;" />
      </div>
      
      <div>
        <label for="message" style="display: block; font-size: 14px; font-weight: 400; color: #F7F7F7; margin-bottom: 6px; font-family: 'raleway', sans-serif;">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Type your message here..." style="width: 100%; padding: 10px 12px; border: 1px solid white; font-size: 14px; background: #191919; color: white; resize: vertical; font-family: 'raleway', sans-serif;"></textarea>
      </div>
      
      <div>
        <button type="submit" style="width: 100%; background: white; color: #1a1a1a; padding: 14px; font-size: 14px; font-weight: 400; border: none; cursor: pointer; font-family: 'raleway', sans-serif;">
          Submit
        </button>
      </div>
    </form>
  </div>
</section>

<!-- Footer -->
<footer style="background: #000000; color: white; padding: 80px 80px; text-align: center;">
  <div style="max-width: 1400px; margin: 0 auto;">
    <h4 style="font-size: 20px; font-weight: 400; margin-bottom: 25px; letter-spacing: 1px; font-family: 'Oswald', sans-serif; text-transform: uppercase;">UTAH SKATEPARK ADVOCACY GROUP</h4>
    <div class="flex justify-center space-x-4 mb-6">
      <a href="https://www.facebook.com/goskateutah" target="_blank" class="hover:opacity-70">
        <svg style="width: 22px; height: 22px; fill: white;" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>
      <a href="https://www.instagram.com/goskateutah/" target="_blank" class="hover:opacity-70">
        <svg style="width: 22px; height: 22px; fill: white;" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a>
    </div>
    <p style="font-size: 13px; color: #999; font-family: 'Oswald', sans-serif;">2025 by The Utah Skatepark Advocacy Group.</p>
  </div>
</footer>
</div>

<!-- Instagram Post Modal -->
{#if selectedPost}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div 
    class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
    on:click={closeModal}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    tabindex="-1"
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div 
      class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
      on:click|stopPropagation
      role="document"
    >
      <!-- Image Side -->
      <div class="md:w-1/2 bg-black flex items-center justify-center">
        <img 
          src={selectedPost.image} 
          alt={selectedPost.title}
          class="w-full h-full object-contain"
        />
      </div>
      
      <!-- Content Side -->
      <div class="md:w-1/2 flex flex-col">
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center">
              <div class="w-7 h-7 bg-white rounded-full"></div>
            </div>
            <span id="modal-title" class="font-semibold">goskateutah</span>
          </div>
          <button 
            on:click={closeModal}
            class="text-gray-500 hover:text-gray-700 text-2xl font-light"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        
        <!-- Content -->
        <div class="flex-1 overflow-y-auto p-4">
          <div class="mb-4">
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex-shrink-0"></div>
              <div>
                <span class="font-semibold">goskateutah</span>
                <p class="text-sm text-gray-700 mt-1 whitespace-pre-line">{selectedPost.caption}</p>
                <p class="text-xs text-gray-400 mt-2">{selectedPost.date}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Actions -->
        <div class="border-t p-4">
          <a 
            href="https://www.instagram.com/goskateutah/" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            View on Instagram →
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  :global(body) {
    margin: 0;
  }
  
  a:hover {
    opacity: 0.7;
  }
  
  .instagram-post {
    position: relative;
  }
  
  .instagram-post .overlay {
    background: rgba(0, 0, 0, 0);
    transition: background 0.3s ease;
  }
  
  .instagram-post:hover .overlay {
    background: rgba(0, 0, 0, 0.6) !important;
  }
  
  .instagram-post .overlay-content {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .instagram-post:hover .overlay-content {
    opacity: 1 !important;
  }
  
  /* Make placeholder text pure white */
  input::placeholder,
  textarea::placeholder {
    color: white !important;
    opacity: 1 !important;
  }
  
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: white !important;
    opacity: 1 !important;
  }
  
  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: white !important;
    opacity: 1 !important;
  }
</style>
