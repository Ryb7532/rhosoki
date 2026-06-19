#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';

function replaceDatesInFile(filePath, today) {
  const full = path.resolve(filePath);
  if (!fs.existsSync(full)) return false;
  const orig = fs.readFileSync(full, 'utf8');
  const replaced = orig.replace(/\d{4}-\d{2}-\d{2}/g, `${today}`);
  if (replaced !== orig) {
    fs.writeFileSync(full, replaced, 'utf8');
    console.log(`Updated dates in ${filePath}`);
    return true;
  }
  return false;
}

const TODAY = new Intl.DateTimeFormat('sv', { timeZone: 'Asia/Tokyo' }).format(new Date());
const files = ['src/components/Sidebar.tsx'];
let changed = false;
for (const f of files) {
  try {
    if (replaceDatesInFile(f, TODAY)) changed = true;
  } catch (e) {
    // ignore
  }
}

if (changed) {
  console.log('Dates updated.');
} else {
  console.log('No date strings found to update.');
}
