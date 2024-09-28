import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditProductPage() {
  const { id } = useParams();
  const [productTitle, setProductTitle] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImages, setProductImages] = useState([]);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [sku, setSku] = useState('');
  const [shippingInfo, setShippingInfo] = useState('');
  const [productVariants, setProductVariants] = useState([]);
  const [tags, setTags] = useState('');
  const [seoSettings, setSeoSettings] = useState('');
  const [visibility, setVisibility] = useState('draft');

  useEffect(() => {
    // Load existing product data for editing
    const loadProductData = async () => {
      // Fetch product data from API or database
      const productData = await fetchProductData(id);
      setProductTitle(productData.title);
      setProductDescription(productData.description);
      setProductImages(productData.images);
      setCategory(productData.category);
      setPrice(productData.price);
      setStockQuantity(productData.stockQuantity);
      setSku(productData.sku);
      setShippingInfo(productData.shippingInfo);
      setProductVariants(productData.variants);
      setTags(productData.tags);
      setSeoSettings(productData.seoSettings);
      setVisibility(productData.visibility);
    };

    loadProductData();
  }, [id]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setProductImages([...productImages, ...files]);
  };

  const handleAddVariant = () => {
    setProductVariants([...productVariants, { size: '', color: '', style: '' }]);
  };

  const handleSave = () => {
    // Save product as draft
  };

  const handleUpdate = () => {
    // Update product
  };

  return (
    <div className="edit-product-page">
      <h1>Edit Product</h1>
      <form>
        <div>
          <label>Product Title:</label>
          <input
            type="text"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Product Description:</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Product Images:</label>
          <input type="file" multiple onChange={handleImageUpload} />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="strategy">Strategy</option>
            <option value="family">Family</option>
            <option value="card">Card</option>
          </select>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Stock Quantity:</label>
          <input
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
          />
        </div>
        <div>
          <label>SKU:</label>
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </div>
        <div>
          <label>Shipping Information:</label>
          <textarea
            value={shippingInfo}
            onChange={(e) => setShippingInfo(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Product Variants:</label>
          {productVariants.map((variant, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Size"
                value={variant.size}
                onChange={(e) =>
                  setProductVariants(
                    productVariants.map((v, i) =>
                      i === index ? { ...v, size: e.target.value } : v
                    )
                  )
                }
              />
              <input
                type="text"
                placeholder="Color"
                value={variant.color}
                onChange={(e) =>
                  setProductVariants(
                    productVariants.map((v, i) =>
                      i === index ? { ...v, color: e.target.value } : v
                    )
                  )
                }
              />
              <input
                type="text"
                placeholder="Style"
                value={variant.style}
                onChange={(e) =>
                  setProductVariants(
                    productVariants.map((v, i) =>
                      i === index ? { ...v, style: e.target.value } : v
                    )
                  )
                }
              />
            </div>
          ))}
          <button type="button" onClick={handleAddVariant}>
            Add Variant
          </button>
        </div>
        <div>
          <label>Tags and Keywords:</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div>
          <label>SEO Settings:</label>
          <textarea
            value={seoSettings}
            onChange={(e) => setSeoSettings(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Visibility:</label>
          <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="hidden">Hidden</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={handleSave}>
            Save as Draft
          </button>
          <button type="button" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProductPage;
