import { writable } from "svelte/store";

export const services = writable([
    {
        title: 'Optical Character Recognition',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        link: '/services/1',
        apiUrl: `http://127.0.0.1:5000/ocr`,
        responseKey: 'text',
        inputComponent: 'Upload',
        outputComponent: 'Showtext'
    },
    {
        title: 'YT Transcript Summarizer',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        link: '/services/2',
        apiUrl: `http://127.0.0.1:5000/summarize`,
        responseKey: 'summary',
        inputComponent: 'Linkcard',
        outputComponent: 'Showtext'
    },
    {
        title: 'Extract Colours from Image',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        link: '/services/3',
        apiUrl: `http://127.0.0.1:5000/colors`,
        responseKey: 'colors',
        inputComponent: 'Upload',
        outputComponent: 'Showcolor'
    },
    {
        title: 'Image Background Remover',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        link: '/services/4',
        apiUrl: `http://127.0.0.1:5000/bgremoval`,
        responseKey: 'bgimage',
        inputComponent: 'Upload',
        outputComponent: 'Showimage'
    },
    {
        title: 'Image Enhance / Compress',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        link: '/services/5',
        apiUrl: `http://127.0.0.1:5000/enhance_compress`,
        responseKey: 'text',
        inputComponent: 'Slider',
        outputComponent: 'Showimage'
    },
    {
        title: 'Image Colorization',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        link: '/services/6',
        apiUrl: `http://127.0.0.1:5000/colorize`,
        responseKey: 'colorize',
        inputComponent: 'Upload',
        outputComponent: 'Showimage'
    }
])