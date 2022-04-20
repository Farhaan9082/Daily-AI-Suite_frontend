import { writable } from "svelte/store";

export const services = writable([
    {
        title: 'Optical Character Recognition',
        detail: 'The image had something written on it. Dont waste hours in reading and typing; just put it here and get it done in seconds.',
        metaDetail: 'Extract text from photos and transfer it to your clipboard with ease',
        link: '/services/1',
        apiUrl: `http://127.0.0.1:5000/ocr`,
        responseKey: 'text',
        inputComponent: 'Upload',
        outputComponent: 'Showtext'
    },
    {
        title: 'YT Transcript Summarizer',
        detail: 'Life is too short for watching all the videos; get a time-saving summary for a Youtube video.',
        metaDetail: 'Get a time-saving summary for a Youtube video',
        link: '/services/2',
        apiUrl: `http://127.0.0.1:5000/summarize`,
        responseKey: 'summary',
        inputComponent: 'Linkcard',
        outputComponent: 'Showtext'
    },
    {
        title: 'Extract Colours from Image',
        detail: 'Find out the colours of image that intrigues you, be it a rainbow or cat; get the accurate hex color.',
        metaDetail: 'Find out the colours of image that intrigues you and get a hex code',
        link: '/services/3',
        apiUrl: `http://127.0.0.1:5000/colors`,
        responseKey: 'colors',
        inputComponent: 'Upload',
        outputComponent: 'Showcolor'
    },
    {
        title: 'Image Background Remover',
        detail: 'Erasing the image without erasing you; so that, an unerased you can be put on something new.',
        metaDetail: "Remove the unnecessary elements from an image's backdrop",
        link: '/services/4',
        apiUrl: `http://127.0.0.1:5000/bgremoval`,
        responseKey: 'bgimage',
        inputComponent: 'Upload',
        outputComponent: 'Showimage'
    },
    {
        title: 'Image Enhance / Compress',
        detail: 'Enhance or compress the image file because the image size was too long/short for them but not for us.',
        metaDetail: 'Enhance or compress the image according to your need',
        link: '/services/5',
        apiUrl: `http://127.0.0.1:5000/enhance_compress`,
        responseKey: 'text',
        inputComponent: 'Slider',
        outputComponent: 'Showimage'
    },
    {
        title: 'Image Colorization',
        detail: 'You put colors in your life.. we put colors in your image. Be it an image of your great grandfather we fill colors to make it more joyful.',
        metaDetail: 'fill your photos with colors to make it more joyful',
        link: '/services/6',
        apiUrl: `http://127.0.0.1:5000/colorize`,
        responseKey: 'colorize',
        inputComponent: 'Upload',
        outputComponent: 'Showimage'
    }
])