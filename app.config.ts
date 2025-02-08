export default defineAppConfig({
    ui: {
        breadcrumb: {
            active: "text-pri dark:text-pri",
            li: "text-black dark:text-black"
        },
        divider: {
            container: {
                base: 'text-pri dark:text-pri text-base lg:text-lg'
            },
            border: {
                base: 'border-gray-800 dark:border-gray-800',
            }
        }
    }
})