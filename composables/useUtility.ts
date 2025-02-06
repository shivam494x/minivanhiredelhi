export default function useUtility() {
    const links = useNav(); 
    function getPath(name: string): string | undefined {
        function findPath(name: string, links: any[]): string | undefined {
            if (!links || links.length === 0) return;
            for (const link of links) {
                if (link.name === name) {
                    return link.path;
                }
                if (Array.isArray(link.sub)) {
                    const result = findPath(name, link.sub);
                    if (result) {
                        return result;
                    }
                }
            }
            return undefined;
        }
        return findPath(name, links);
    }

    return { getPath };
}
