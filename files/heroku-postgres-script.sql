begin;
    set
    transaction read write;
alter database d89ggubjdpnksb set default_transaction_read_only = off;
commit;

--> DROP TABLE public."Menus";
CREATE SEQUENCE "Menus_id_seq"
START 1;
CREATE TABLE public."Menus"
(
    "id" bigint NOT NULL DEFAULT nextval('"Menus_id_seq"'
    ::regclass),
    "menu_id" character varying
    (255) COLLATE pg_catalog."default" NOT NULL,    
    "label" character varying
    (255) COLLATE pg_catalog."default" NOT NULL,
    "title" character varying
    (255) COLLATE pg_catalog."default",
    "parent_id" character varying
    (255) COLLATE pg_catalog."default",    
    "value" character varying
    (1024) COLLATE pg_catalog."default",
    "createdAt" timestamp
    with time zone NOT NULL,
    "updatedAt" timestamp
    with time zone NOT NULL,
    CONSTRAINT "Menus_pkey" PRIMARY KEY
    (id)
);

    commit;

    begin;
        set
        transaction read write;
    alter database d89ggubjdpnksb set default_transaction_read_only = off;
    commit;
    INSERT INTO public."Menus"
        (
        "id", "menu_id", "label", "title", "parent_id", "value", "createdAt", "updatedAt")
    VALUES
        (1, '1', 'Menu 1', 'Marine Industry Problems', null, 'Secure data sharing and collaboration among partners => Blockchain corruption cyber attack Decarbonization => emission reduction goals, carbon neutral fuels, optimized logistic chains Safe seafare => Shipping 4.0  autonomous shipping, human error New business models: blockchain => verticals feeding on shipping data', '2019-11-04 00:00:00+09', '2019-11-04 00:00:00+09'),
        (2, '1.1', 'Menu 1.1', 'Marine Industry Problems', '1', 'Secure data sharing and collaboration among partners => Blockchain corruption cyber attack Decarbonization => emission reduction goals, carbon neutral fuels, optimized logistic chains Safe seafare => Shipping 4.0  autonomous shipping, human error New business models: blockchain => verticals feeding on shipping data', '2019-11-04 00:00:00+09', '2019-11-04 00:00:00+09'),
        (3, '2', 'Menu 2', 'Industry 4.0 notes', null, 'Sensors Autonomous vehicles and equipment Drones 3D printing IOT and Cloud Augmented Reality, VR, Digital twin ‘Learn (AR and VR), Train (VR), Perform (AR) Digital simulation', '2019-11-04 00:00:00+09', '2019-11-04 00:00:00+09'),
        (4, '2.1', 'Menu 2.1', 'Industry 4.0 notes', '1', 'Sensors Autonomous vehicles and equipment Drones 3D printing IOT and Cloud Augmented Reality, VR, Digital twin ‘Learn (AR and VR), Train (VR), Perform (AR) Digital simulation', '2019-11-04 00:00:00+09', '2019-11-04 00:00:00+09');
    commit;