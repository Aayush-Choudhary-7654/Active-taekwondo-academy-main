import React from 'react';

const Schedule = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8">Class Schedule</h2>
          
          <div className="grid gap-6">
            {/* Add your schedule content here */}
            <div className="border rounded-lg p-6 shadow-sm weeks">
                <div className="border rounded-lg p-6 shadow-sm flex justify-between">
              <h3 className="text-2xl font-semibold mb-4 ">Weekly Classes</h3>
              <h3 className='text-2xl font-semibold mb-4'>Timing</h3>
              </div>
              {/* Example schedule items */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span>5:00 PM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday</span>
                  <span>5:00 PM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span>5:00 PM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>5:00 PM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>5:00 PM - 7:00 PM</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Morning: 6:00 AM - 8:00 AM <br/> Evening: 5:00 PM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          <br /><br /><br /><br /><br /><br /><br />
          <div className="text-center">
            <p className="text-m text-black">
                For more information call +91 9999999999
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule; 