export default function useUtility() {
    const sluger = (text: string): string => text.toLowerCase().trim().replace(/\s+/g, "-");

    return { sluger };
}
