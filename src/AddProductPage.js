import React, { useState } from 'react';

function AddProductPage() {
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
  const [formErrors, setFormErrors] = useState({});
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setProductImages([...productImages, ...files]);
  };

  const handleAddVariant = () => {
    setProductVariants([...productVariants, { size: '', color: '', style: '' }]);
  };

  const validateForm = () => {
    const errors = {};
    if (!productTitle) errors.productTitle = 'Product title is required';
    if (!productDescription) errors.productDescription = 'Product description is required';
    if (!category) errors.category = 'Category is required';
    if (!price) errors.price = 'Price is required';
    if (!stockQuantity) errors.stockQuantity = 'Stock quantity is required';
    if (!sku) errors.sku = 'SKU is required';
    if (!shippingInfo) errors.shippingInfo = 'Shipping information is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      setFeedbackMessage('Please fill in all required fields');
      return;
    }

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productTitle,
          productDescription,
          productImages,
          category,
          price,
          stockQuantity,
          sku,
          shippingInfo,
          productVariants,
          tags,
          seoSettings,
          visibility,
        }),
      });

      if (response.ok) {
        setFeedbackMessage('Product saved successfully');
      } else {
        setFeedbackMessage('Failed to save product');
      }
    } catch (error) {
      setFeedbackMessage('An error occurred while saving the product');
    }
  };

  const handlePublish = async () => {
    if (!validateForm()) {
      setFeedbackMessage('Please fill in all required fields');
      return;
    }

    try {
      const response = await fetch('/api/products/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productTitle,
          productDescription,
          productImages,
          category,
          price,
          stockQuantity,
          sku,
          shippingInfo,
          productVariants,
          tags,
          seoSettings,
          visibility,
        }),
      });

      if (response.ok) {
        setFeedbackMessage('Product published successfully');
      } else {
        setFeedbackMessage('Failed to publish product');
      }
    } catch (error) {
      setFeedbackMessage('An error occurred while publishing the product');
    }
  };

  return (
    <div className="add-product-page">
      <h1>Add New Product</h1>
      <form>
        <div>
          <label>Product Title:</label>
          <input
            type="text"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
          {formErrors.productTitle && <p className="error">{formErrors.productTitle}</p>}
        </div>
        <div>
          <label>Product Description:</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
          {formErrors.productDescription && <p className="error">{formErrors.productDescription}</p>}
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
          {formErrors.category && <p className="error">{formErrors.category}</p>}
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {formErrors.price && <p className="error">{formErrors.price}</p>}
        </div>
        <div>
          <label>Stock Quantity:</label>
          <input
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
          />
          {formErrors.stockQuantity && <p className="error">{formErrors.stockQuantity}</p>}
        </div>
        <div>
          <label>SKU:</label>
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
          {formErrors.sku && <p className="error">{formErrors.sku}</p>}
        </div>
        <div>
          <label>Shipping Information:</label>
          <textarea
            value={shippingInfo}
            onChange={(e) => setShippingInfo(e.target.value)}
          ></textarea>
          {formErrors.shippingInfo && <p className="error">{formErrors.shippingInfo}</p>}
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
          <button type="button" onClick={handlePublish}>
            Publish
          </button>
        </div>
      </form>
      {feedbackMessage && <p className="feedback">{feedbackMessage}</p>}
    </div>
  );
}

export default AddProductPage;
