import pymupdf

try:
    print("Opening PDF...")
    doc = pymupdf.open(r"C:\Users\abdul\Downloads\Logo.pdf")
    print("Loading page...")
    page = doc.load_page(0)
    print("Getting pixmap...")
    pix = page.get_pixmap(alpha=True, dpi=300)
    print("Saving PNG...")
    pix.save(r"public\images\logo.png")
    print("Converted successfully")
except Exception as e:
    print(f"Error: {e}")
