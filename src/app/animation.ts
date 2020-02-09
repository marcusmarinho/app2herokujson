import { trigger, transition, style, animate, keyframes, query, stagger } from '@angular/animations';

export const slideInAnimation =
    trigger('animation-slide', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translate(300px, 0)' }),
            animate('1.5s 0s ease-in-out', keyframes([
                style({ offset: 0.75, opacity: 1, transform: 'translateX(0)' }),
                style({ offset: 1, opacity: 1, transform: 'translateY(0px)' }),
            ]))
        ])
    ]);

export const awesomeAnimation =
    trigger('animation-awesome', [
        transition(':enter', [
            query(':self', [
                style({ opacity: 0 }),
                stagger(100, [
                    animate('1500ms ease-in', style({ opacity: 1 }))
                ])
            ])
        ])
    ]);

