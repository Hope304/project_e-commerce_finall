import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import HomeLayout from './Layouts/HomeLayout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        console.log(props.initialPage.props.auth.user)
        root.render(
            <>
                <HomeLayout user={props.initialPage.props.auth.user}>
                    <App {...props} />
                </HomeLayout>
            </>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
