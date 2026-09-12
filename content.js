/* =============================================================================
   PORTFOLIO CONTENT
   -----------------------------------------------------------------------------
   This is the ONLY file you edit to add / remove / rearrange things on the
   desktop. The engine in index.html turns this tree into icons and windows.

   A node is one object. Supported types:

     { type: "folder", name: "Projects", icon: "24.png", children: [ ...nodes ] }
         A folder. `children` can hold any nodes, including more folders
         (nest as deep as you want). `icon` is optional (defaults to a folder).

     { type: "text", name: "README.txt", body: `multi-line string` }
         Opens a read-only TextEdit window showing `body`.

     { type: "image", name: "Watch Front", src: "assets/images/xyz.jpg" }
         Opens an Image Viewer window.

     { type: "link", name: "LinkedIn", icon: "LinkedIn.png",
       url: "https://..." }
         Opens the URL in a new browser tab. `icon` recommended.

   Optional on ANY node:
     icon:  filename inside "assets/icons/png 64px/"  (overrides the default)
     pos:   { x: 20, y: 120 }  — only used by TOP-LEVEL desktop icons to pin
            them to a spot. Omit it and the icon is auto-placed in a grid.

   To ADD a folder to the desktop:  add an object to the DESKTOP array below.
   To ADD a file to a folder:       add an object to that folder's `children`.
   To REMOVE anything:              delete its object.
   ============================================================================= */

const DESKTOP = [

  {
    type: "text",
    name: "Read First",
    icon: "1.png",
    pos: { x: 20, y: 20 },
    body:
`Welcome to my Portfolio OS!

This is an interactive website designed to look and feel like a classic
desktop operating system. Here's how to navigate:

Desktop Icons:  Double-click any icon to open a folder, a document, or a link.

Windows:  Drag a window by its title bar, resize it from any edge or corner,
and close it with the "x" button. The active window is always on top.

Folders:  The Projects folder holds details about my work. Folders can contain
other folders, text files, and images -- open them the same way.

Feel free to explore!`
  },

  {
    type: "folder",
    name: "Projects",
    icon: "24.png",
    pos: { x: 20, y: 120 },
    children: [

      {
        type: "folder",
        name: "Fluent Form",
        children: [
          {
            type: "text",
            name: "Description",
            body:
`Fluent Form

Project Overview:
Fluent Form is a speech therapy app designed to help people with speech
impediments pronounce words correctly.

Features:
- Phonetic speech analysis
- Mouth mapping
- Need based practice
- AI generated summary of progress

Technologies Used:
- Microsoft Azure Speech to Text
- Node.js
- OpenAI API
- Express.js
- Wav file manipulation

Status:
Completed

Conclusion:
- First place in Society for Hispanic Engineers Hackathon`
          }
        ]
      },

      {
        type: "folder",
        name: "RideABull",
        children: [
          {
            type: "text",
            name: "Description",
            body:
`RideABull

Project Overview:
RideABull is a ridesharing app for college students that connects riders with
drivers in a safe manner.

Features:
- Secured authentication
- Ride management
- CO2 tracking
- Customizable profiles

Technologies Used:
- Node.js
- MongoDB Atlas
- Google OAuth
- Google Maps API
- Bcrypt Hash

Status:
Completed

Conclusion:
- Best use of MongoDB Atlas
- Learned about Zero Knowledge Proofs`
          }
        ]
      },

      {
        type: "folder",
        name: "Front Running",
        children: [
          {
            type: "text",
            name: "Description",
            body:
`Front Running

Project Overview:
Front Running detection is a tool to detect unethical trading practices in
decentralized finance.

Features:
- Under Construction

Technologies Used:
- Under Construction

Status:
In Development

Next Steps:
- Collect data from the mempool
- Train a model to detect front running
- Create a presentable dashboard`
          }
        ]
      },

      {
        type: "folder",
        name: "Image-to-3D Spatial Reconstruction",
        children: [
          {
            type: "text",
            name: "Description",
            body:
`Image-to-3D Spatial Reconstruction

Project Overview:
A 2D-image-to-3D reconstruction pipeline running on a Raspberry Pi 4B with a
camera module, exploring low-level computer vision and spatial reconstruction.

Features:
- Machine-learning method for single-image reconstruction
- Image-stitching method for multi-image reconstruction
- Runs entirely on embedded hardware (Raspberry Pi OS)

Technologies Used:
- Python
- OpenCV
- Raspberry Pi 4B + camera module
- Command line interface

Status:
In Development (January 2026 - Present)`
          }
        ]
      },

      {
        type: "folder",
        name: "Spatial Eye-Tracking Interface",
        children: [
          {
            type: "text",
            name: "Description",
            body:
`Spatial Eye-Tracking Interface

Project Overview:
A real-time gaze-tracking prototype for macOS that translates ocular
landmarks into spatial UI interactions.

Features:
- Low-latency frame capture via AVFoundation
- On-device facial landmark detection via the Vision Framework (Apple Neural
  Engine)
- Linear Interpolation Low-Pass Filter to denoise sensor data
- Coordinate-remapping algorithm from normalized device coordinates to
  screen-space pixels

Technologies Used:
- SwiftUI
- Vision Framework
- Core Graphics
- AVFoundation

Status:
In Development (January 2026 - Present)`
          }
        ]
      },

      {
        type: "folder",
        name: "Multilingual Vision Quest",
        children: [
          {
            type: "text",
            name: "Description",
            body:
`Multilingual Vision Quest

Project Overview:
An iOS app that teaches foreign languages through real-time object
identification, built for the SHPE UF Code for Change hackathon.

Features:
- Live camera pipeline for real-time object detection
- Instant vocabulary translations for identified objects
- Pronunciation guides powered by a vision model

Technologies Used:
- Swift
- AVFoundation
- Vision

Status:
Completed

Conclusion:
- Winner, "Best Use of Gemini" -- SHPE UF Code for Change Hackathon
  (November 2025)`
          }
        ]
      },

      {
        type: "text",
        name: "README.txt",
        body:
`This folder contains all of my proudest projects. Enjoy learning about all my
projects on my journey to invent.`
      }

    ]
  },

  {
    type: "folder",
    name: "Watches",
    icon: "24.png",
    pos: { x: 100, y: 120 },
    children: [

      {
        type: "folder",
        name: "NH36 Build",
        children: [
          {
            type: "text",
            name: "Details.txt",
            body:
`Building this watch started with a simple problem:

I could not find a watch I truly loved. The ones I could afford did not excite
me, and the ones that did were way out of my budget. So, I figured, why not
build my own? This project became a crash course in horology, where I got to
choose every piece, from the gears to the hands, making it exactly what I
wanted. It is proof that with some patience and a lot of tinkering, you do not
have to settle for what is on the shelf -- you can create something truly
unique.

All of the parts were ordered from AliExpress and recycled from old watches.
Including the tools required and all the materials, the total came out under
$100. It is powered by a Seiko NH36 movement and has glow in the dark hands.
The watch band is from an old Lacoste watch.`
          },
          { type: "image", name: "Watch Front.jpg", src: "assets/images/IMG_20250921_185254445.jpg" },
          { type: "image", name: "Watch Back.jpg",  src: "assets/images/IMG_20250921_185333776.jpg" }
        ]
      },

      {
        type: "folder",
        name: "Casio AE1200 Mod",
        children: [
          {
            type: "text",
            name: "Details.txt",
            body:
/* DRAFT -- Bernie, edit the details below. */
`Casio AE1200 Mod

The base:
A stock Casio AE1200WH -- the "World Time" (a.k.a. the Casio Royale). A cheap,
near-indestructible digital watch and one of the most modded platforms out
there, which is exactly why I picked it as a starting point.

The mods:
- (draft) ...
- (draft) ...
- (draft) ...

Why:
(draft) After building a watch from scratch, I wanted the opposite exercise:
take something mass-produced and make it feel personal with small, reversible
changes.

Status:
Completed -- swapped the stock resin band for a burgundy leather strap.`
          },
          { type: "image", name: "Stock AE1200.jpg", src: "assets/images/Casio-AE1200.jpg" },
          { type: "image", name: "Finished Mod.jpg", src: "assets/images/Casio-AE1200-Mod-Finished.jpg" }
        ]
      }

    ]
  },

  {
    type: "folder",
    name: "Citi",
    icon: "24.png",
    pos: { x: 180, y: 120 },
    children: [
      {
        type: "text",
        name: "Internship.txt",
        body:
`Over the summer of 2025, I interned at Citi as a Project Manager. I worked on
program briefs and letters of authentication for all the Citi Retail Cards
servicing communications phone short codes. Additionally, while trying to teach
my team about AI, I developed a video pioneering the use of AI to write
PowerShell scripts for file management in non-technical teams within Citi. This
video reached the AI Ambassador team, which is in charge of AI implementation
within Citi. It was used by the AI Ambassador team at Citi with over 600 people
to increase the use of internal AI tools, using me as an example of how interns
can teach teams about AI tool usage.`
      },
      { type: "image", name: "Citi.jpg",      src: "assets/images/Citi1.jpg" },
      { type: "image", name: "Citi Bike.jpg", src: "assets/images/Citi2.jpg" },
      { type: "image", name: "Citi Team.jpg", src: "assets/images/Citi3.jpg" }
    ]
  },

  {
    type: "folder",
    name: "Amazon",
    icon: "24.png",
    pos: { x: 100, y: 220 },
    children: [
      {
        type: "text",
        name: "Internship.txt",
        body:
`During the summer of 2026, I interned at Amazon in Bellevue, WA as a Software
Development Engineer Intern.

I designed the Smithy API model and the DynamoDB + S3 data model for "Project
Builder," a Java service that turned a data insights page into a BRD-for-
automations tool. I implemented CRUD operations plus a file-ingestion path
(.docx/PDF/URL) that persists to S3 with DynamoDB metadata for filtered
retrieval, enforcing tenant isolation through server-constructed
client-ID-scoped object keys and presigned PUT/GET URLs. I also built the
React/TypeScript UI and shipped it to production, iterating from
user-feedback sessions.

I fixed a production bug in a cross-platform (macOS/Windows) workflow-recorder
app where AI-assistant responses were being dropped by the capture
preprocessing pipeline. I tracked it down through DOM mutation analysis and
native file-system watching (Swift FSEvents), then shipped the fix to
production and validated capture on both platforms.

I also shipped (beta) a team document-sharing feature for a multi-tenant RAG
chatbot over user-uploaded documents, using JWT-scoped authorization for
access levels. While building it, I uncovered a two-year-old bug in the
shared OpenSearch vector store and authored the remediation plan: migrating
to a pre-filtering-capable ingestion engine, plus a full re-index and
backfill.`
      },
      { type: "image", name: "Amazon Spheres.jpg", src: "assets/images/Amazon-Spheres.jpg" },
      { type: "image", name: "Ready to Launch.jpg", src: "assets/images/Amazon-ReadyToLaunch.jpg" }
    ]
  },

  {
    type: "folder",
    name: "Marathons",
    icon: "24.png",
    pos: { x: 20, y: 220 },
    children: [
      {
        type: "text",
        name: "Miami Marathon 2024.txt",
        body:
`*****************************************************************
*                                                               *
*                  CERTIFICATE OF COMPLETION                     *
*                                                               *
*****************************************************************

This certificate is proudly presented to:

                      BERNARDO LOPEZ LEON

In recognition of the outstanding achievement of successfully
completing the

             LIFETIME MIAMI MARATHON 2024

With an official time of: 04:24:09

*This certificate was made by myself`
      },
      { type: "image", name: "Miami Pic 1.jpg", src: "assets/images/Running1.jpg" },
      { type: "image", name: "Miami Pic 2.jpg", src: "assets/images/Running2.jpg" },

      {
        type: "text",
        name: "Toronto Waterfront 2025.txt",
        body:
/* DRAFT -- Bernie, tweak the wording; the stats are straight off the results card. */
`Toronto Waterfront Marathon 2025

Race:         TCS Toronto Waterfront Marathon
Date:         October 19, 2025
Finish time:  03:33:54

Placement:
- 1,337th of 7,307 overall
- 1,118th of 4,986 male
- 94th of 565 in M18-24

Highlights:
- Top 100 in my age group (M18-24)
- Top half overall
- Negative split -- ran the second half faster than the first

The improvement:
My first marathon, Miami 2024, I ran 04:24:09 and fell apart in the second
half. Toronto was the unfinished business from that day. I took just over 50
minutes off my time, but the number I actually care about is the negative
split: it means the pacing, fueling, and hydration plan finally held together
for a full 26.2. Miami proved I could finish. Toronto proved I could race.`
      },
      { type: "image", name: "Toronto Stats.png", src: "assets/images/Toronto-Stats.png" },
      { type: "image", name: "Toronto Medal.jpg", src: "assets/images/Toronto-Medal.jpg" },

      {
        type: "text",
        name: "Why I Run.txt",
        body:
`I didn't start running because of a life-long dream or a bucket list; I started
because of an opportunity and a dare.

I ran my first marathon almost on a whim. The feeling of accomplishment was
real, but it quickly led to a question: What's next? The answer wasn't another.
For me, the appeal isn't a goal to be checked off; it's the need for a challenge
that scales with my progress. As soon as one distance becomes comfortable, I'm
compelled to find the next limit to test. However, I felt like there was more to
achieve in 26.2 miles. I would like to finish feeling comfortable and not like
I'm dying.

The Discipline of Solitude

My "why" is intensely private. I'm not running for the social club or the shared
journey. Running is my dedicated method of escape and stress relief. It is a
healthy, disciplined way to disappear for hours, carving out necessary solitude
from the noise and demands of the world. The marathon training schedule
guarantees me that time -- a purposeful, self-imposed isolation that brings calm
and focus.

The Pursuit of Mastery

My first marathon was proof of my mental resilience -- I got to the finish line
-- but it was also a strategic and physical failure.

The first half was strong; the second was a complete physical collapse. I
learned the hard way that endurance running is not just about putting in the
miles; it's a profound exercise in logistics and precision. You must master
pacing, fueling, hydration, and weather.

I am currently training for my second marathon because the first one left me
with unfinished business. I didn't lose the mental battle, but I failed to
execute the physical strategy. My focus now is not simply to finish, but to
master the distance -- to bridge that gap between my mental will and my body's
performance.

I run to claim the identity of someone who is disciplined, capable, and
enduring. I run for the intense satisfaction of facing a monumental task and
applying my mind to master the physical strategy required. I run because the
true reward isn't the medal; it's the personal transformation that happens when
you refuse to quit on a challenge that broke you once before.`
      }
    ]
  },

  {
    type: "link",
    name: "LinkedIn",
    icon: "LinkedIn.png",
    pos: { x: 20, y: 320 },
    url: "https://www.linkedin.com/in/bernardolopezleon/"
  },
  {
    type: "link",
    name: "YouTube",
    icon: "youtube-logo.png",
    pos: { x: 100, y: 320 },
    url: "https://www.youtube.com/@bloopz/featured"
  },
  {
    type: "link",
    name: "Instagram",
    icon: "instagram.jpg",
    pos: { x: 180, y: 320 },
    url: "https://www.instagram.com/bernie_log_/"
  }

];
