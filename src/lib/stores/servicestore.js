import { writable } from "svelte/store";

export const services = writable([
    {
        title: 'Optical Character Recognition',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        link: '/services/1',
        inputComponent: 'Upload'
    },
    {
        title: 'YT Transcript Summarizer',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        link: '/services/2',
        inputComponent: 'Linkcard'
    },
    {
        title: 'Extract Colours from Image',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        link: '/services/3',
        inputComponent: 'Upload'
    },
    {
        title: 'Image Background Remover',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        link: '/services/4',
        inputComponent: 'Upload'
    },
    {
        title: 'Image Caption Generator',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        link: '/services/5',
        inputComponent: 'Upload'
    },
    {
        title: 'Image Colorization',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        link: '/services/6',
        inputComponent: 'Upload'
    }
])