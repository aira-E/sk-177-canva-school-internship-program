"use server";
import { put } from '@vercel/blob';

export async function uploadFile(formData: FormData) {
  const file = formData.get('file') as File;
  if (!file) throw new Error("No file uploaded");
  
  // Real usage with @vercel/blob when token is configured
  if (process.env.BLOB_READ_WRITE_TOKEN && process.env.BLOB_READ_WRITE_TOKEN !== "vercel_blob_rw_fake_token") {
    const blob = await put(file.name, file, { access: 'public' });
    return { url: blob.url };
  }

  // Mock response
  await new Promise(resolve => setTimeout(resolve, 1500));
  return { url: `https://fake-vercel-blob-url.com/${file.name}` };
}
