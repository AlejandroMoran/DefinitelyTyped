
// Type definitions for instagram-id-to-url-segment-tests.ts
// Project: https://github.com/slang800/instagram-id-to-url-segment#readme
// Definitions by: Alejandro Moran <https://github.com/AlejandroMoran>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
/* =================== USAGE ===================

    import { instagramIdToUrlSegment, urlSegmentToInstagramId } from 'instagram-id-to-url-segment';
    
    console.log(instagramIdToUrlSegment('1038059720608660215')); // 5n7dDmhTr3
    console.log(urlSegmentToInstagramId('5n7dDmhTr3')); // 1038059720608660215

 =============================================== */
export function instagramIdToUrlSegment(id: string): string;
export function urlSegmentToInstagramId(urlSegment: string): string;