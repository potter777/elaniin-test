"use strict";
let photos = new class {
    constructor() {
        this.list = [];
        this.initPhotos();
    }
    initPhotos() {
        this.list.push({
            id: 1,
            camera: 'Cannon',
            cameraModel: 'Canon EOS 6D',
            focalLength: '35.0mm',
            aperture: 'ƒ/1.4',
            shutterSpeed: '1/4000s',
            iso: 100,
            dimensions: '3648 × 5472'
        });
        this.list.push({
            id: 2,
            camera: 'SONY',
            cameraModel: 'ILCE-6500',
            focalLength: '30.0mm',
            aperture: 'ƒ/1.4',
            shutterSpeed: '1/1250s',
            iso: 100,
            dimensions: '6000 × 4000'
        });
        this.list.push({
            id: 3,
            camera: 'Canon',
            cameraModel: 'Canon EOS 5D Mark IV',
            focalLength: '150.0mm',
            aperture: 'ƒ/2.8',
            shutterSpeed: '1/640s',
            iso: 100,
            dimensions: '6720 × 4480'
        });
        this.list.push({
            id: 4,
            camera: 'FUJIFILM',
            cameraModel: 'X-T20',
            focalLength: '128.0mm',
            aperture: 'ƒ/2.8',
            shutterSpeed: '1/500s',
            iso: 200,
            dimensions: '5856 × 3904'
        });
        this.list.push({
            id: 5,
            camera: 'Apple',
            cameraModel: 'iPhone',
            focalLength: '--',
            aperture: '--',
            shutterSpeed: '--',
            iso: 0,
            dimensions: '4243 x 2829'
        });
        this.list.push({
            id: 6,
            camera: 'NIKON CORPORATION',
            cameraModel: 'NIKON D3200',
            focalLength: '50.0mm',
            aperture: 'ƒ/1.4',
            shutterSpeed: '1/2500s',
            iso: 180,
            dimensions: '6016 × 4000'
        });
    }
    search(id) {
        for (let photo of this.list) {
            if (photo.id = id) {
                return photo;
            }
        }
    }
};
//# sourceMappingURL=photos.js.map