<div align='center'>

# 🚀 Astro: Personal Certificates

</div>

[Spanish Readme (Español)](README.es.md)

### A page containing my personal certificates.

> 🧩 You can see the [**Live Demo**](https://abrahamgalue-certificates.netlify.app/) here.

![preview](public/preview/01-page-preview.jpg)

![preview](public/preview/02-page-preview.jpg)

![preview](public/preview/03-page-preview.jpg)

## 🚀 Description

This project allows you to showcase your personal certificates in an attractive and organized way. It is built with **Astro**, a modern framework for creating fast and optimized websites.

You can add your certificates in PDF format and customize the website's appearance to suit your style.

## ⚡ Getting Started

### Prerequisites

1. Git.
2. Node.js 22 or higher.
3. pnpm (optional, you can use npm or yarn).

## 🔧 Installation

### Using pnpm

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abrahamgalue/personal-certificates.git
   cd personal-certificates
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the development server:**

   ```bash
   pnpm dev
   ```

4. **Open your browser and visit:**

   ```bash
   http://localhost:4321
   ```

## ✨ How to Add Certificates

If you want to use this site to display your own certificates, follow these simple steps:

1. **Configure the Data**:
   - Create a file named `certificates.json` in the `src/data/` folder.
   - Copy and follow the structure of `src/data/example.json`.

2. **Add the Files**:
   - Save the **.pdf** files of your certificates in `public/certificates/`.
   - Save the **preview images** in `src/assets/`. It is recommended to use the `.webp` format.

3. **Verify Filenames**:
   - The filename of the PDF and the preview image **must exactly match** the `filename` property defined in your `certificates.json` file.

4. **Image Configuration (Optional)**:
   - By default, the project looks for images with the `.webp` extension. If you use another format, change it in `src/components/Certificates.astro` (around line 40):
     ```astro
     imagePath={`/src/assets/${certificate.filename}.webp`}
     ```

5. **Future Updates**:
   - To add more certificates after the initial setup, you only need to add the new object to the JSON and upload the corresponding files to the mentioned folders.

## 🎭 Technologies

- [**Astro**](https://astro.build/) Framework for building fast websites.
