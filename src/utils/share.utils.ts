/**
 * Share utility functions
 * Helpers for social sharing functionality
 */

export interface ShareData {
  title: string;
  text: string;
  url?: string;
}

/**
 * Check if Web Share API is supported
 */
export function canShare(): boolean {
  return typeof navigator !== 'undefined' && 'share' in navigator;
}

/**
 * Share using Web Share API
 */
export async function share(data: ShareData): Promise<boolean> {
  if (!canShare()) {
    console.warn('Web Share API not supported');
    return false;
  }

  try {
    await navigator.share(data);
    return true;
  } catch (error) {
    // User cancelled or error occurred
    if (error instanceof Error && error.name !== 'AbortError') {
      console.error('Share error:', error);
    }
    return false;
  }
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    }
  } catch (error) {
    console.error('Copy to clipboard error:', error);
    return false;
  }
}

/**
 * Build voting share message
 */
export function buildVotingShareMessage(
  finalistName: string,
  voteCode: string
): string {
  return `Vote for ${finalistName} in the African Health Excellence Awards 2025! SMS ${voteCode} to 33351 (SA) or 34433 (ZW)`;
}

/**
 * Share finalist for voting
 */
export async function shareFinalist(
  finalistName: string,
  voteCode: string,
  url?: string
): Promise<boolean> {
  const message = buildVotingShareMessage(finalistName, voteCode);
  
  return share({
    title: `Vote for ${finalistName}`,
    text: message,
    url: url || window.location.href,
  });
}
