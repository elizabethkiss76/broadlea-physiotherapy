# How to Add Google Maps to Broadlea Physiotherapy Website

## Step 1: Get Your Google Maps Embed Code

1. Go to [Google Maps](https://maps.google.com)
2. Search for "Broadlea Physiotherapy, East Drayton, DN22 0LF" or "North Green, East Drayton, DN22 0LF"
3. When you find your location, click the **Share** button (or the three-dot menu → Share)
4. Click on the **Embed a map** tab
5. Copy the entire `<iframe>` code provided

Example embed code will look like:
```html
<iframe src="https://www.google.com/maps/embed?pb=..." width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

## Step 2: Add to Contact Section

The Contact Section is located at: `/home/ubuntu/broadlea-physiotherapy/client/src/components/ContactSection.tsx`

Find the section that says `{/* Right: Booking form */}` and add a new div before it with the map:

```tsx
{/* Left: Map */}
<div className="fade-up delay-100">
  <div className="rounded-2xl overflow-hidden shadow-xl h-[500px]">
    <iframe
      src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>
```

## Step 3: Adjust Layout

Change the grid layout from `lg:grid-cols-2` to keep the map and form side-by-side:

The current layout is:
```tsx
<div className="grid lg:grid-cols-2 gap-12 items-start">
```

This should work fine for the map + form layout.

## Step 4: Test

1. Replace `YOUR_GOOGLE_MAPS_EMBED_URL_HERE` with your actual embed URL from Step 1
2. Refresh the website preview
3. The map should appear on the left, booking form on the right

## Alternative: Simple Map Link

If you prefer just a link instead of an embedded map, you can use:

```tsx
<a 
  href="https://maps.google.com/?q=North+Green,+East+Drayton,+DN22+0LF"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[oklch(0.66_0.04_165)] hover:underline"
>
  View on Google Maps
</a>
```

This opens Google Maps in a new tab when clicked.
