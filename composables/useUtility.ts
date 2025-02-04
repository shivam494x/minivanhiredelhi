export default function useUtility() {
    function getPath(links: Array<any>, name: string): string | undefined {
        if (links.length === 0) return;
        let result;
        const x = links.find(link => link.name === name);
        if (x) {
            result = x.path;
        } else {
            for (const link of links) {
                if(Array.isArray(link.sub)){
                    const y = link.sub.find((l: any) => l.name === name)
                    if (y) {
                        result = y.path;
                    }
                }
            }
        }
        return result;
    }


    return { getPath };
}
