const Contacts = require("./contactList");

module.exports = {
	billings: {
		exclude: true,
		locationName: "Billings",
		contactInformation: {
			officeNumber: "",
		},
		officeEmail: "",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [],
	},
	bozeman: {
		locationName: "Bozeman",
		googleMapURI:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.9560753564497!2d-111.0734444!3d45.671782099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534545a223303447%3A0xba974d770eff1284!2s2621%20W%20College%20St%2C%20Bozeman%2C%20MT%2059718!5e0!3m2!1sen!2sus!4v1692032462055!5m2!1sen!2sus",
		

contactInformation: {
			officeNumber: "(406) 551-7880",
		},
		address: {
			firstLine: "2621 West College Street Suite E",
			secondLine: "Bozeman, MT 59715",
		},
		officeEmail: "gallatin@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
			"hair_follicle",
		],
		contacts: [Contacts.jhyett, Contacts.jmathias],
	},
	butte: {
		exclude: true,
		locationName: "Butte",
		contactInformation: {
			officeNumber: "",
		},
		officeEmail: "",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [],
	},
	choteau: {
		exclude: true,
		locationName: "Choteau",
		contactInformation: {
			officeNumber: "",
		},
		officeEmail: "",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [],
	},
	cutbank: {
		exclude: true,
		locationName: "Cut Bank",
		contactInformation: {
			officeNumber: "(406) 450-0164",
		},
		officeEmail: "darryl@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [Contacts.dburditt],
	},
	dillon: {
		exclude: true,
		locationName: "Dillon",
		contactInformation: {
			officeNumber: "",
		},
		officeEmail: "",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [],
	},
	glasgow: {
		locationName: "Glasgow",
		googleMapURI:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.758702657001!2d-106.6396282843491!3d48.19200047922782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x533dab9df392a089%3A0x46705e162c697449!2s501%20E%20Court%20St%2C%20Glasgow%2C%20MT%2059230!5e0!3m2!1sen!2sus!4v1567204881826!5m2!1sen!2sus",
		contactInformation: {
			officeNumber: "(406) 529-1789",
		},
		address: {
			firstLine: "501 East Court St",
			secondLine: "Glasgow, MT 59230 (Courthouse Basement)",
		},
		officeEmail: "valley@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
			"hair_follicle",
		],
		contacts: [],
	},
	glendive: {
		locationName: "Glendive",
		googleMapURI:
			"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10862.968973036845!2d-104.7174802!3d47.1041235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x551b2b961ece40c0!2sChristina%20Miller%2C%20MMFT%2C%20LCPC!5e0!3m2!1sen!2sus!4v1603234605679!5m2!1sen!2sus",
		contactInformation: {
			officeNumber: "(406) 529-1789",
			faxNumber: "(888) 855-7964",
		},
		address: {
			firstLine: "313 West Valentine 123",
			secondLine: "Glendive, MT 59330",
		},
		officeEmail: "monitoringcenter@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [],
	},
	great_falls: {
		locationName: "Great Falls",
		googleMapURI:
			"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5390.446532090585!2d-111.303917!3d47.505043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534237ee0f90e2dd%3A0xe8a6000c3e77705e!2s200+Central+Ave%2C+Great+Falls%2C+MT+59401!5e0!3m2!1sen!2sus!4v1514020488988",
		contactInformation: {
			officeNumber: "(406) 315-3241",
			faxNumber: "(888) 855-7964",
		},
		address: {
			firstLine: "200 Central Avenue, Suite A",
			secondLine: "Great Falls, MT 59401",
		},
		officeEmail: "cascade@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
			"hair_follicle",
			"pbt",
		],
		contacts: [
			Contacts.blathrop,
			Contacts.jshelman,
			Contacts.mrose,
			Contacts.rmurphy,
			Contacts.tsigglin,
		],
	},
	hamilton: {
		locationName: "Hamilton",
		googleMapURI:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.036310405318!2d-114.15917348441533!3d46.269382679118685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535eba01d8d27421%3A0x1a110e7e2f968999!2s1720%20N%201st%20St%2C%20Hamilton%2C%20MT%2059840!5e0!3m2!1sen!2sus!4v1567204960055!5m2!1sen!2sus",
		contactInformation: {
			officeNumber: "(406) 529-1789",
		},
		address: {
			firstLine: "1720 North 1st Street, East End Unit",
			secondLine: "Hamilton, MT 59840",
		},
		officeEmail: "ravalli@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [],
	},
	havre: {
		locationName: "Havre",
		googleMapURI:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.9457317710912!2d-109.68760988433638!3d48.5534327792588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536ab365addddca5%3A0x53aeb4000898a1c8!2s109%202nd%20St%20W%2C%20Havre%2C%20MT%2059501!5e0!3m2!1sen!2sus!4v1567204832408!5m2!1sen!2sus",
		contactInformation: {
			officeNumber: "(406) 945-9012",
		},
		address: {
			firstLine: "109 2nd Street West",
			secondLine: "Havre, MT 59501",
		},
		officeEmail: "hill@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
			"hair_follicle",
		],
		contacts: [Contacts.kkeeler],
	},
	helena: {
		exclude: true,
		locationName: "Helena",
		contactInformation: {
			officeNumber: "",
		},
		officeEmail: "",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [],
	},
	kalispell: {
		locationName: "Kalispell",
		googleMapURI:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.5449091081596!2d-114.31332538434897!3d48.196119279228206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536650ea88917bd5%3A0xcf8ce43bb5df43b3!2s112+3rd+St+E%2C+Kalispell%2C+MT+59901!5e0!3m2!1sen!2sus!4v1518030807347",
		contactInformation: {
			officeNumber: "(406) 393-2455",
			faxNumber: "(406) 393-2456",
		},
		address: {
			firstLine: "112 3rd St E",
			secondLine: "Kalispell, MT 59901",
		},
		officeEmail: "flathead@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
			"hair_follicle",
		],
		contacts: [
			Contacts.bhumphreys,
			Contacts.jtschida,
			Contacts.mkimmel,
			Contacts.mtibbetts,
		],
	},
	lewistown: {
		locationName: "Lewistown",
		googleMapURI:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.776475373826!2d-109.4302867847613!3d47.06423493327963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5340d4a0a5ff5127%3A0x4a42f178d82f92f4!2s500%20W%20Main%20St%20%23323%2C%20Lewistown%2C%20MT%2059457!5e0!3m2!1sen!2sus!4v1603235611501!5m2!1sen!2sus",
		contactInformation: {
			officeNumber: "(406) 529-1789",
			faxNumber: "(888) 855-7964",
		},
		address: {
			firstLine: "500 West Main Street #323",
			secondLine: "Lewistown, MT 59457",
		},
		officeEmail: "monitoringcenter@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [Contacts.lsingley],
	},
	libby: {
		exclude: true,
		locationName: "Libby",
		contactInformation: {
			officeNumber: "",
		},
		officeEmail: "",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [],
	},
	malta: {
		exclude: true,
		locationName: "Malta",
		contactInformation: {
			officeNumber: "",
		},
		officeEmail: "",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [],
	},
	miles_city: {
		locationName: "Miles City",
		googleMapURI:
			"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5502.1724452590315!2d-105.844757!3d46.407346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x533a741c73fe3059%3A0x32feeddc554b1f20!2s1010+Main+St%2C+Miles+City%2C+MT+59301!5e0!3m2!1sen!2sus!4v1514020331456",
		contactInformation: {
			officeNumber: "(406) 874-6058",
			faxNumber: "(888) 855-7964",
		},
		address: {
			firstLine: "1010 Main Street",
			secondLine: "Miles City, MT 59301",
		},
		officeEmail: "custer@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
			"hair_follicle",
		],
		contacts: [Contacts.hroos, Contacts.tstrub],
	},
	missoula: {
		locationName: "Missoula",
		googleMapURI:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.8592789319287!2d-114.03098020000002!3d46.885816899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535dce69cd5ce6af%3A0xbaa65a5982d77ab5!2s2685%20Palmer%20St%20%232c%2C%20Missoula%2C%20MT%2059808!5e0!3m2!1sen!2sus!4v1692032564053!5m2!1sen!2sus",
		contactInformation: {
			officeNumber: "(406) 529-1789",
			faxNumber: "(888) 855-7964",
		},
		address: {
			firstLine: "2685 Palmer Street Suite 2C",
			secondLine: "Missoula, MT 59808",
		},
		officeEmail: "missoula@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
			"hair_follicle",
		],
		contacts: [
			Contacts.aallen,
			Contacts.anealey,
			Contacts.aprochet,
			Contacts.aalt,
			Contacts.aebner,
			Contacts.jhenry,
			Contacts.jtarbert,
			Contacts.jsickels,
			Contacts.lhenderson,
			Contacts.tbenjamin,
		],
	},
	other: {
		exclude: true,
		locationName: "Other",
		contactInformation: {
			officeNumber: "",
		},
		officeEmail: "",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [],
	},
	polson: {
		locationName: "Polson",
		googleMapURI:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2111.0908540544096!2d-114.1623278307497!3d47.69340094531486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5367738ed69d1ecb%3A0x894a72f27a46853b!2s307%201st%20St%20W%20Suite%204%2C%20Polson%2C%20MT%2059860!5e0!3m2!1sen!2sus!4v1656305904666!5m2!1sen!2sus",
		contactInformation: {
			officeNumber: "(406) 319-2322",
			faxNumber: "(888) 855-7964",
		},
		address: {
			firstLine: "307 1st St. W Suite 4",
			secondLine: "Polson, MT 59860",
		},
		officeEmail: "lake@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [Contacts.aibsen, Contacts.gjacobson, Contacts.jclairmont],
	},
	thompson_falls: {
		locationName: "Thompson Falls",
		googleMapURI:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.645682705566!2d-115.34804988436991!3d47.594133379183816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5360c45d0c4955b1%3A0x681c38920990e77e!2s406%20W%20Main%20St%2C%20Thompson%20Falls%2C%20MT%2059873!5e0!3m2!1sen!2sus!4v1567205001803!5m2!1sen!2sus",
		contactInformation: {
			officeNumber: "(406) 529-1789",
		},
		address: {
			firstLine: "406 Main Street",
			secondLine: "Thompson Falls, MT 59873",
		},
		officeEmail: "sanders@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [],
	},
	shelby: {
		exclude: true,
		locationName: "Shelby",
		contactInformation: {
			officeNumber: "",
		},
		officeEmail: "",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [],
	},
	sidney: {
		locationName: "Sidney",
		googleMapURI:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.2595768882693!2d-104.17423088491437!3d47.718210888255236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5324719fe613eda1%3A0xba4f6231e2cd19fb!2s1201+W+Holly+St+%23209%2C+Sidney%2C+MT+59270!5e0!3m2!1sen!2sus!4v1515617955496",
		contactInformation: {
			officeNumber: "(406) 433-6925",
			faxNumber: "(888) 855-7964",
		},
		address: {
			firstLine: "1201 West Holly Street, Suite 209",
			secondLine: "Sidney, MT 59270",
		},
		officeEmail: "richland@compliancemonitoringsystems.com",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [Contacts.rkula],
	},
	superior: {
		exclude: true,
		locationName: "Superior",
		contactInformation: {
			officeNumber: "",
		},
		officeEmail: "",
		services: [
			"remote_breath",
			"drug_patch",
			"ua",
			"scram",
			"gps",
			"house_arrest",
			"alcohol_monitoring_discretion",
		],
		contacts: [],
	},
};
