import ServiceHero from "@/components/ServiceHero";
import servicesData from "@/lib/serviceData"; // Adjust the path as needed

interface ServiceTemplateProps {
  params: {
    service: string; // This represents the dynamic segment of the URL
  };
}

const ServiceTemplate = ({ params }: ServiceTemplateProps) => {
  const { service } = params; // Extract the service parameter

  const serviceData = servicesData[service as keyof typeof servicesData];

  if (!serviceData) {
    return <p>Service not found.</p>;
  }

  return (
    <div>
      <ServiceHero
        service={serviceData} // Pass the service data to the ServiceHero component
      />
    </div>
  );
};

export default ServiceTemplate;
