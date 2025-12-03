# Backend Configuration and Troubleshooting Documentation

## Email System Implementation

### Initial Setup
1. Configured SMTP settings using environment variables
   ```bash
   # Create .env file with required variables
   SMTP_HOST=your_mail_server
   SMTP_PORT=465
   SMTP_USERNAME=your_email
   SMTP_SECURE=ssl
   ```

2. Implemented PHPMailer integration
   ```bash
   # Installed Composer
   brew install composer
   
   # Added PHPMailer dependency
   composer require phpmailer/phpmailer
   ```

### Debug and Error Handling
1. Added comprehensive error logging
   - Server-side request logging
   - SMTP debug output
   - Frontend API response validation

2. Implemented CORS handling
   ```php
   header("Access-Control-Allow-Origin: [origin]");
   header("Access-Control-Allow-Methods: POST, OPTIONS");
   header("Access-Control-Allow-Headers: Content-Type");
   ```

### Security Measures
1. Input Sanitization
   - HTML special chars encoding
   - Email validation
   - XSS prevention

2. SMTP Security
   - SSL/TLS encryption
   - Secure password handling
   - Authentication validation

## Key Issues Resolved

### 1. Headers Already Sent Error
- **Problem**: PHP warning about headers already sent
- **Solution**: Implemented output buffering

### 2. Gallery Display Inconsistency (2025 Images)
- **Problem**: 2025 gallery thumbnails appeared taller/longer than other years, not fitting properly in the grid layout
- **Root Cause**: 
  - Original 2025 images were unoptimized camera photos (4134x2756px, 2-2.5MB each)
  - Other years used web-optimized images (~1024x1024px, 60-100KB each)
  - Large file sizes and portrait orientation caused aspect ratio issues in the 16:9 grid
  
- **Solution**:
  1. Optimized all 2025 images using macOS `sips` tool:
     ```bash
     cd public/images/2025/Awards
     for img in *.jpg; do sips -Z 1920 -s format jpeg -s formatOptions 85 "$img" --out "$img"; done
     
     cd ../Summit
     for img in *.jpg; do sips -Z 1920 -s format jpeg -s formatOptions 85 "$img" --out "$img"; done
     ```
  2. Reduced file sizes by 70% (from 2MB to ~600KB each)
  3. Resized to web-optimized dimensions (1920x1280px)
  4. **Critical Fix**: Replaced portrait-oriented `1.jpg` with a landscape image to match grid layout expectations
  
- **Result**: 2025 gallery now displays uniformly with other years, faster loading times, and consistent aspect ratios

## Image Optimization Guidelines for Future Events

When adding new event images to the gallery:

1. **Image Dimensions**
   - Maximum width: 1920px for landscape orientation
   - Maintain original aspect ratio during resize
   
2. **Thumbnail Selection (First Image)**
   - **Must use landscape orientation** for the first image (e.g., `1.jpg`) in each category
   - This image appears as the thumbnail in the gallery grid
   - Portrait images cause layout issues in the 16:9 aspect ratio grid

3. **File Optimization**
   - Format: JPEG
   - Quality: 85%
   - Target file size: <150KB per image for optimal web performance

4. **Batch Optimization Command**
   ```bash
   # Navigate to the year/category folder
   cd public/images/{YEAR}/{CATEGORY}/
   
   # Optimize all images
   for img in *.jpg; do 
     sips -Z 1920 -s format jpeg -s formatOptions 85 "$img" --out "$img"
   done
   ```

5. **Aspect Ratio Consideration**
   - Gallery grid uses 16:9 aspect ratio
   - Images will be cropped to fit
   - Compose images with center focus for best results

## API Integration

### Endpoint Structure
