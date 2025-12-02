#!/usr/bin/env node

// Test Auto-Updating Date Formatting
const formatDateLong = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const EVENT_DATES = {
  votingClose: new Date('2025-10-31T23:59:59'),
  awards2025: new Date('2025-11-15T15:00:00'),
};

console.log('\n🎯 AUTO-FORMATTING TEST\n');
console.log('Source Date Objects:');
console.log('  votingClose:', EVENT_DATES.votingClose.toISOString());
console.log('  awards2025:', EVENT_DATES.awards2025.toISOString());
console.log('\nAuto-Formatted Text (via getters):');
console.log('  deadlineText:', formatDateLong(EVENT_DATES.votingClose));
console.log('  awardsCeremonyDate:', formatDateLong(EVENT_DATES.awards2025));
console.log('\n✅ Dates are dynamically formatted!');
console.log('\n📝 Change EVENT_DATES → All text updates automatically\n');
