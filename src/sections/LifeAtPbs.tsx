"use client";
import { useRouter } from "next/navigation";

const LifeAtPbs = () => {
  const router = useRouter(); // This hook allows for programmatic navigation [^1]

  return (
    <div className="mt-16 md:mt-24 lg:mt-40 px-4 sm:px-6 md:px-8 lg:px-12">
      <div data-aos="flip-down" className="text-center max-w-screen-md mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black">
          Life At <span className="text-[#750000]">Prime Path Solutions</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Prime Path Solutions is a versatile and powerful cloud-based solution
          that brings together all the tools you need to efficiently manage and
          grow your business process outsourcing operations. But it&apos;s also
          a place where employees thrive, collaborate, and grow!
        </p>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Culture Section */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-8 mt-16 md:mt-24 lg:mt-36">
          <div
            data-aos="fade-right"
            className="w-full sm:w-1/2 relative mb-8 sm:mb-0"
          >
            <h2 className="font-semibold text-2xl md:text-3xl">
              Our Culture:
              <span className="text-[#750000]">
                {" "}
                Celebrating Unique Perspectives
              </span>
            </h2>
            <p className="py-5">
              Our work environment fosters collaboration, creativity, and a
              shared commitment to excellence. At Prime Path Solutions, we
              prioritize open communication, inclusivity, and mutual respect to
              create a space where everyone&apos;s voice is heard.
            </p>
          </div>
          <div data-aos="fade-left" className="w-full sm:w-1/2 relative">
            <img
              className="rounded-xl shadow-xl w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover"
              src="/img/company/img1.jpg"
              alt="Team Collaboration"
            />
          </div>
        </div>

        {/* Career Growth Section */}
        <div className="mt-16 md:mt-24 lg:mt-40 flex flex-col md:flex-row items-center md:space-x-10">
          <div
            data-aos="fade-down"
            className="w-full md:w-7/12 relative mb-8 md:mb-0 order-2 md:order-1"
          >
            <img
              className="rounded-xl shadow-xl w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover"
              src="/img/company/img2.jpg"
              alt="Career Growth"
            />
          </div>
          <div
            data-aos="fade-down"
            className="w-full md:w-5/12 order-1 md:order-2"
          >
            <h2 className="font-semibold text-2xl md:text-3xl">
              Career Growth & Development:
              <span className="text-[#750000]"> Nurturing Talent</span>
            </h2>
            <p className="py-5">
              We offer various training programs, mentorship opportunities, and
              career development pathways to ensure that our employees grow and
              succeed. Whether you&apos;re aiming for leadership roles or
              exploring new areas of expertise, we are committed to supporting
              your professional journey.
            </p>
          </div>
        </div>

        {/* Work-Life Balance Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-10 mt-16 md:mt-24">
          <div data-aos="fade-right" className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="font-semibold text-2xl md:text-3xl">
              Work-Life Balance:
              <span className="text-[#750000]">
                {" "}
                Your Well-Being Comes First
              </span>
            </h2>
            <p className="py-5">
              At Prime Path Solutions, we understand the importance of
              maintaining a healthy work-life balance. We offer flexible working
              arrangements, remote work options, and an emphasis on personal
              time, ensuring that our team stays energized and happy both at
              work and outside of it.
            </p>
          </div>
          <div data-aos="fade-left" className="w-full md:w-1/2 relative">
            <img
              className="rounded-xl shadow-xl w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover"
              src="/img/company/img5.jpg"
              alt="Work-Life Balance"
            />
          </div>
        </div>

        {/* Diversity & Inclusion Section */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-center md:space-x-10 mb-16 md:mb-20">
          <div
            data-aos="fade-down"
            className="w-full md:w-6/12 mb-8 md:mb-0 order-2 md:order-1"
          >
            <img
              data-aos="fade-right"
              style={{ animationDelay: "500ms" }}
              className="rounded-xl shadow-xl w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover"
              src="/img/company/img4.jpg"
              alt="Diversity & Inclusion"
            />
          </div>
          <div
            data-aos="fade-left"
            className="w-full md:w-6/12 order-1 md:order-2"
          >
            <h2 className="font-semibold text-2xl md:text-3xl mb-4">
              Diversity & Inclusion:
              <span className="text-[#750000]">
                {" "}
                Celebrating Unique Perspectives
              </span>
            </h2>
            <p className="py-2">
              At Prime Path Solutions, diversity is one of our core values. We
              create an inclusive workplace where every employee feels valued
              and respected, and where their unique perspectives help us to
              innovate and solve challenges together.
            </p>
          </div>
        </div>

        {/* Employee Testimonials Section */}
        <div className="mt-16 md:mt-24 lg:mt-40 text-center">
          <h2 className="text-[#750000] font-semibold text-2xl md:text-3xl mb-8">
            Employee Testimonials
          </h2>
          <div className="flex flex-col md:flex-row justify-center md:space-x-10 space-y-6 md:space-y-0">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white shadow-xl rounded-xl p-6">
                <p className="text-gray-600 italic text-sm md:text-base">
                  Prime Path Solutions has given me the opportunity to develop
                  both professionally and personally. The work culture here is
                  collaborative, and I feel truly supported by my team.
                </p>
                <p className="text-[#750000] font-bold mt-4">
                  Rajah, Project Manager
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white shadow-xl rounded-xl p-6">
                <p className="text-gray-600 italic text-sm md:text-base">
                  I love working at Prime Path Solutions because every day is a
                  new challenge. I feel that my contributions are valued, and
                  the resources available for career development are
                  exceptional.
                </p>
                <p className="text-[#750000] font-bold mt-4">
                  Surya, Operations Manager
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Our Team Section */}
        <div className="mt-16 md:mt-24 lg:mt-40 text-center mb-16 md:mb-24">
          <h2 className="text-[#750000] font-semibold text-2xl md:text-3xl mb-8">
            Join Our Team
          </h2>
          <p className="text-gray-500 mb-8 text-sm md:text-base max-w-3xl mx-auto">
            If you&apos;re passionate about creating innovative solutions and
            working with a talented, diverse team, Prime Path Solutions is the
            place for you. We&apos;re always looking for individuals who want to
            grow, make a difference, and help us provide exceptional services to
            our clients.
          </p>
          <button
            className="bg-[#750000] text-white px-6 py-3 rounded-full hover:bg-[#600000] transition-colors duration-300"
            onClick={() => router.push("/careers")}
          >
            Explore Career Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default LifeAtPbs;
